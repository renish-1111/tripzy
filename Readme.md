# Tripzy: Your Ultimate Trip Planner  

Welcome to **Tripzy**! This powerful tool helps you efficiently plan and manage all aspects of your travels. Whether you're organizing itineraries, tracking expenses, or exploring destinations, Tripzy has you covered.  

---

## 🚀 Features  

- **Itinerary Management**: Create and organize your trip itineraries effortlessly.  
- **Expense Tracking**: Keep track of your travel expenses with ease and monitor your spending.  
- **Destination Information**: Access detailed information about your destinations, including attractions and activities.  
- **CRUD Operations**: Manage your trips, expenses, and itineraries using simple Create, Read, Update, and Delete operations.  
- **User Authentication**: Secure your account with login and signup functionality, ensuring your data is safe and accessible only to you.  
- **History Tracking**: View and manage the history of all your trips and expenses.  
- **Pie Charts**: Visualize your travel expenses with dynamic pie charts for different categories (e.g., food, travel, accommodation).  
- **PDF Download**: Download your trip details and expenses as a PDF document for easy sharing and record-keeping.  
- **Mobile-Responsive Design**: Enjoy a seamless experience across all devices, from desktops to mobile phones.  

---

## ⚙️ Installation  

Follow these steps to get Tripzy up and running on your local machine:  

1. **Clone the repository**:  
    ```bash  
    git clone https://github.com/sanket-sakariya/tripzy.git  
    ```  

2. **Navigate to the project directory**:  
    ```bash  
    cd tripzy  
    ```  

3. **Set up a virtual environment**:  
    ```bash  
    python -m venv venv  
    ```  

4. **Activate the virtual environment**:  
    - On **Windows**:  
        ```bash  
        venv\Scripts\activate  
        ```  
    - On **macOS/Linux**:  
        ```bash  
        source venv/bin/activate  
        ```  

5. **Install the dependencies**:  
    ```bash  
    pip install -r requirements.txt  
    ```  

---

## 🔧 Configuration  

1. **Create a `.env` file** in the root directory to store environment variables:  
    ```env  
    FLASK_SECRET_KEY = your_secret_key  
    MYSQL_ADDON_HOST = localhost  
    MYSQL_ADDON_DB = tripzy  
    MYSQL_ADDON_USER = root  
    MYSQL_ADDON_PASSWORD = password  
    ```  

2. Replace `your_secret_key` with a secure secret key for your application.  

---

## 🏁 Usage  

To start the Flask development server, run the following command:  

```bash  
flask run  
```  

Once the server is running, open your browser and go to `http://127.0.0.1:5000` to access the Tripzy application.  

---

## 🛡️ User Authentication  

Tripzy comes with robust **authentication** features to keep your data secure:  
- **User Registration**: Create an account to start planning your trips.  
- **Login System**: Securely log in to access your personalized dashboard.  
- **Session Management**: Enjoy a seamless and secure user experience with session tracking.  

---

## 📊 Visualize Your Travel  

Gain insights into your spending patterns with **pie charts** that break down your expenses by category. These visualizations help you understand where your money is going and ensure you stay within budget.  

---

## 📄 Export as PDF  

Need to share your trip details? Tripzy offers an option to **download your trip information** and expense breakdown as a PDF. Whether you're sharing your trip with friends or saving it for later reference, the PDF download option ensures you can easily carry your travel plans with you.  

---

## 📱 Mobile-Friendly  

Tripzy's **responsive design** ensures it looks great on all devices, from large screens to small mobile phones. Access and manage your trips anywhere, anytime.  

---

## 💡 Future Improvements  

- **Multiple Currency Support**: Track expenses in different currencies with real-time conversion rates.  
- **Collaborative Planning**: Invite others to collaborate on trip planning and expense tracking.  
- **Advanced Analytics**: Gain deeper insights into your travel habits with advanced analytics features.  

---

With **Tripzy**, you’ll never miss a detail of your trip. Whether you're planning a solo adventure, a family vacation, or a business trip, Tripzy helps you stay organized and stress-free.  

Happy travels! 🌍✈️  

