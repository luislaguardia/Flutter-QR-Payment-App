# E-Wallet Mobile App with Top-up Feature

This project is a mobile **e-wallet** application that allows users to top-up their wallet balances. The backend uses **Node.js** and **Express** to handle payments via **Stripe** and stores user balances in a **MongoDB** database. The frontend is built using **Flutter**.

## Features
- **Mobile App**: Users can top-up their wallets using the app.
- **Stripe Integration**: Secure payment handling.
- **Backend**: Node.js server for processing top-ups and managing balances.
- **Database**: MongoDB for storing user data.
- **API**: RESTful API for interacting with the backend.

---

## Tech Stack

### Frontend
- **Flutter**: Used for building the mobile app (Dart programming language).

### Backend
- **Node.js + Express**: Server handling payment and business logic.
- **MongoDB**: NoSQL database for storing user information.
- **Stripe**: Payment gateway for handling top-ups.

---

## Setup Instructions

### Prerequisites

1. Install **Flutter**: [Flutter Installation Guide](https://flutter.dev/docs/get-started/install).
2. Install **Node.js**: [Node.js Installation Guide](https://nodejs.org/).
3. Install **MongoDB**: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

---

## Backend Setup (Node.js + Express)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/<your-username>/e-wallet-app.git
    cd e-wallet-app/backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure Stripe**:
    - Sign up for a Stripe account: [Stripe](https://stripe.com).
    - Get your **Secret Key** from the Stripe Dashboard under Developers > API keys.

4. **Create a `.env` file** in the `backend` directory and add your Stripe secret key and MongoDB URI:
    ```bash
    STRIPE_SECRET_KEY=your_stripe_secret_key
    MONGO_URI=mongodb://localhost:27017/e_wallet
    ```

5. **Run MongoDB locally**:
    ```bash
    mongod
    ```

6. **Run the backend server**:
    ```bash
    node server.js
    ```
    The backend server will start on **http://localhost:3000**.

---

## Frontend Setup (Flutter)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/<your-username>/e-wallet-app.git
    cd e-wallet-app/frontend
    ```

2. **Run the Flutter app**:
    ```bash
    flutter run
    ```

---

## Backend API Endpoints

| HTTP Method | Endpoint              | Description                         |
|-------------|-----------------------|-------------------------------------|
| `POST`      | `/top-up`             | Handles the wallet top-up process   |
| `GET`       | `/wallet-balance/:id` | Retrieves user's current balance    |

### **1. POST `/top-up`**

**Request Body**:
```json
{
    "amount": 100,
    "userId": "user123"
}
