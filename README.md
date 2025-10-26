
# 🔐 User Authentication System


## ![userRegister](https://github.com/user-attachments/assets/bd7aff05-f6fe-46d5-9905-905e49e656b0)


A simple and secure user registration and login system built with **Node.js**, **Express**, **MongoDB**, and **JWT**.

---

## 🚀 Features
- 📝 **User Registration (Register)**
- 🔑 **User Login (Login)**
- 🛡️ **JWT token-based authentication**
- 🔒 **Password hashing with bcrypt**
- ☁️ **Cloud database integration using MongoDB Atlas**

---

## ⚙️ Installation

### 1️⃣ Clone the project repository
```bash
git clone https://github.com/your-username/user-auth-system.git
cd user-auth-system
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file in the root directory and add the following:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

### 4️⃣ Start the server
```bash
node server.js
```

Server will run on **http://localhost:3000**

---

## 📡 API Endpoints

| Endpoint   | Method | Description                           | Authentication |
|-------------|---------|---------------------------------------|----------------|
| `/register` | POST    | Register a new user                   | ❌ No           |
| `/login`    | POST    | Authenticate user and get JWT         | ❌ No           |
| `/profile`  | GET     | Access protected profile data         | ✅ Yes (JWT)    |

---

## 🧠 How to Use

1️⃣ **Register a new user**  
Send a POST request to `/register` with a JSON body:
```json
{
  "username": "yourUsername",
  "password": "yourPassword"
}
```

2️⃣ **Login with registered credentials**  
Send a POST request to `/login` and receive a **JWT token**.

3️⃣ **Access protected routes**  
Use your token in the **Authorization header**:
```
Authorization: Bearer <your_token>
```

---

## 🧰 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **bcryptjs** for password hashing
- **jsonwebtoken (JWT)** for authentication

---

## 🔒 Security Tips
- 🚫 Never commit your `.env` file or credentials to version control.
- ⚙️ Use environment variables for all secrets.
- 🔑 Always hash passwords before storing them in the database.

---

## 📸 Example Request (Login)
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "testuser", "password": "test123"}'
```

Response:
```json
{
  "message": "Login successful",
  "token": "your_jwt_token_here"
}
```

---

## 👨‍💻 Author
Burcu AKSOY 
📧 burcu.aksy91@gmail.com
🔗 https://github.com/burcuaksoy-ch

---

⭐ If you like this project, don’t forget to **star** it on GitHub!
