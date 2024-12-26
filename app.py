from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from passlib.hash import bcrypt
import mysql.connector
from functools import wraps

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure random key in production

# Database Configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'sanket1122005',
    'database': 'tripzy'
}

def get_db_connection():
    try:
        return mysql.connector.connect(**db_config)
    except mysql.connector.Error as e:
        flash(f"Database connection error: {e}", 'danger')
        return None

# Login Required Decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash("You need to log in first.", 'warning')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/', methods=['GET', 'POST'])
@login_required
def index():
    user_id = session.get('user_id')  # Ensure user ID is fetched for filtering trips

    if request.method == 'GET':
        # Retrieve trips data for the logged-in user
        conn = get_db_connection()
        if conn is None:
            print("1")
            return render_template("index.html", trips=[])

        try:
            cursor = conn.cursor(dictionary=True)
            query = """
                SELECT trip_id, trip_name, destination, created_at
                FROM trips 
                WHERE user_id = %s
            """
            cursor.execute(query, (user_id,))
            trips = cursor.fetchall()
            return render_template("index.html", trips=trips)
        except mysql.connector.Error as e:
            print("2")
            return render_template("index.html", trips=[])
        finally:
            cursor.close()
            conn.close()

    if request.method == 'POST':
        # Retrieve data from the form
        trip_name = request.form.get('tripName')
        destination = request.form.get('tripDestination')

        if not trip_name or not destination:
            return jsonify({"error": "'tripName' and 'destination' are required."}), 400

        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed."}), 500

        try:
            cursor = conn.cursor()
            query = """
                INSERT INTO trips (user_id, trip_name, destination) 
                VALUES (%s, %s, %s)
            """
            cursor.execute(query, (user_id, trip_name, destination))
            conn.commit()
            return redirect(url_for('index'))
        except mysql.connector.Error as e:
            return jsonify({"error": f"Database error: {e}"}), 500
        finally:
            cursor.close()
            conn.close()


@app.route('/trip/<int:trip_id>', methods=['GET'])
@login_required
def trip_details(trip_id):
    user_id = session.get('user_id')  # Ensure user is authenticated
    conn = get_db_connection()
    if conn is None:
        return render_template("expense.html", expenses=[], trip_id=trip_id, trip_name="Unknown")

    try:
        cursor = conn.cursor(dictionary=True)

        # Fetch trip_name based on trip_id
        trip_name_query = """
            SELECT trip_name 
            FROM trips
            WHERE trip_id = %s AND user_id = %s
        """
        cursor.execute(trip_name_query, (trip_id, user_id))
        trip_row = cursor.fetchone()
        trip_name = trip_row['trip_name'] if trip_row else "Unknown"

        # Fetch expenses for the selected trip
        expenses_query = """
            SELECT expense_id, description, amount, method, category, location, created_at
            FROM expenses
            WHERE trip_id = %s AND user_id = %s
        """
        cursor.execute(expenses_query, (trip_id, user_id))
        expenses = cursor.fetchall()

        return render_template("expense.html", expenses=expenses, trip_id=trip_id, trip_name=trip_name)
    except mysql.connector.Error as e:
        return render_template("expense.html", expenses=[], trip_id=trip_id, trip_name="Error")
    finally:
        cursor.close()
        conn.close()



# Route: Signup
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = bcrypt.hash(password)
        
        conn = get_db_connection()
        if conn is None:
            flash("Database connection failed.", 'danger')
            return redirect(url_for('signup'))
        
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
            if cursor.fetchone():
                flash('Username already exists. Please choose another.', 'warning')
                return redirect(url_for('signup'))
            
            cursor.execute(
                "INSERT INTO users (username, password) VALUES (%s, %s)", 
                (username, hashed_password)
            )
            conn.commit()
            flash('Account created successfully! Please log in.', 'success')
            return redirect(url_for('login'))
        except mysql.connector.Error as e:
            flash(f"Error creating account: {e}", 'danger')
        finally:
            cursor.close()
            conn.close()
    return render_template('signup.html')

# Route: Login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        conn = get_db_connection()
        if conn is None:
            flash("Database connection failed.", 'danger')
            return redirect(url_for('login'))
        
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
            user = cursor.fetchone()
            if not user:
                flash('Username does not exist. Please sign up.', 'warning')
                return redirect(url_for('signup'))
            
            if bcrypt.verify(password, user['password']):
                session['user_id'] = user['user_id']
                session['username'] = user['username']
                flash('Logged in successfully!', 'success')
                return redirect(url_for('index'))
            else:
                flash('Incorrect password. Please try again.', 'danger')
        except mysql.connector.Error as e:
            flash(f"Error during login: {e}", 'danger')
        finally:
            cursor.close()
            conn.close()
    return render_template('login.html')

# Route: Logout
@app.route('/logout')
@login_required
def logout():
    session.clear()
    flash("Logged out successfully.", 'success')
    return redirect(url_for('login'))


@app.errorhandler(415)
def unsupported_media_type(e):
    return jsonify({"error": "Unsupported Media Type. Please use 'application/json' for your request."}), 415


if __name__ == '__main__':
    app.run(debug=True)
