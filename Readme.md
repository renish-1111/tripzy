# Tripyz

Welcome to Tripzy! This project is designed to help you plan and manage your trips efficiently.

## Features

- **Itinerary Management**: Create and manage your trip itineraries.
- **Expense Tracking**: Keep track of your travel expenses.
- **Destination Information**: Get information about your travel destinations.

## Installation

To install Tripzy, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sanket-sakariya/tripzy.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tripzy
    ```
3. Set up a virtual environment:
    ```bash
    python -m venv venv
    ```
4. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
5. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Configuration

1. Create a `.env` file in the root directory to store environment variables:
    ```
    FLASK_SECRET_KEY = your_secret_key

    MYSQL_ADDON_HOST = localhost
    MYSQL_ADDON_DB = tripzy
    MYSQL_ADDON_USER = root
    MYSQL_ADDON_PASSWORD = password
    ```
2. Replace `your_secret_key` with a secure secret key for your application.

## Usage

To start the Flask development server, run:
```bash
flask run
```

