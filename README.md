<div align="center">

# 📋 Customer Management System

### A Dynamic Full-Stack Web Application for Managing Customer Records

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![EJS](https://img.shields.io/badge/Template-EJS-red)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple?logo=bootstrap)](https://getbootstrap.com/)

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🚀 About The Project

**Customer Management System** is a full-stack web application built with **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **EJS** templating. It allows users to create, view, update, and delete customer records efficiently through a clean, server-rendered interface.

This project is a **Dynamic SSR (Server-Side Rendering) App**, meaning all pages are rendered on the server and delivered as complete HTML to the client — offering fast initial load times and SEO-friendly structure.

> 💡 This is the **first full-stack project** in my development journey, built before transitioning to React on the front end. It represents a solid foundation in full-stack architecture using the MEN stack (MongoDB, Express, Node.js).

---

## ✨ Features

- ✅ **Add Customers** — Create new customer records with full validation
- ✅ **View Customers** — Browse all stored customers in a clean list view
- ✅ **Edit Customers** — Update existing customer information
- ✅ **Delete Customers** — Remove customer records from the database
- ✅ **Egyptian Phone Validation** — Accepts Egyptian numbers (`010`, `011`, `012`, `015`) and international format (`+20`)
- ✅ **Flash Messages** — Success and error feedback messages on every action
- ✅ **Server-Side Rendering** — All pages rendered dynamically via EJS templates
- ✅ **Responsive UI** — Mobile-friendly design using Bootstrap

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB via Mongoose |
| **Templating** | EJS + express-ejs-layouts |
| **Validation** | validator.js |
| **Session** | express-session |
| **Flash Messages** | express-flash-message |
| **HTTP Methods** | method-override |
| **Dev Tool** | Nodemon |
| **Frontend** | Bootstrap 5, HTML5, CSS3 |
| **Config** | dotenv |

---

## 📁 Project Structure

```
Customer-Management-System/
│
├── public/               # Static assets (CSS, images, JS)
│
├── server/               # Server-side logic
│   ├── models/           # Mongoose schemas/models
│   ├── routes/           # Express route handlers
│   └── controllers/      # Business logic controllers
│
├── views/                # EJS templates
│   ├── layouts/          # Shared layout templates
│   ├── customers/        # Customer-specific views
│   └── partials/         # Reusable partial views
│
├── app.js                # Main application entry point
├── package.json          # Project metadata & dependencies
├── .gitignore            # Files excluded from version control
├── .env                  # Environment variables (not committed)
└── README.md             # Project documentation
```

---

## 📦 Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) `v18` or higher
- [npm](https://www.npmjs.com/) `v9` or higher
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

---

## ⚙️ Getting Started

Follow these steps to get the project running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/mohamed-hashem182005/Customer-Management-System
```

### 2. Navigate into the project directory

```bash
cd Customer-Management-System
```

### 3. Install all dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) below).

### 5. Start the development server

```bash
npm run start
```

The app will be running at **http://localhost:3000** (or the port defined in your `.env`).

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project and add the following:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/customer_management
SESSION_SECRET=your_super_secret_key_here
```

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port the server listens on | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/cms` |
| `SESSION_SECRET` | Secret key for session encryption | `mysecretkey123` |

> ⚠️ **Never commit your `.env` file to version control.** It is already included in `.gitignore`.

---

## 💻 Usage

Once the app is running, you can manage customers with the following information:

| Field | Description | Validation |
|---|---|---|
| **First Name** | Customer's first name | Required |
| **Last Name** | Customer's last name | Required |
| **Email** | Customer's email address | Valid email format required |
| **Phone Number** | Egyptian or international number | `010`, `011`, `012`, `015`, or `+20` prefix |
| **Customer Details** | Additional notes or description | Optional |

### Available Routes

| Method | Route | Description |
|---|---|---|
| `GET` | `/customers` | List all customers |
| `GET` | `/customers/new` | Show form to add a customer |
| `POST` | `/customers` | Create a new customer |
| `GET` | `/customers/:id/edit` | Show form to edit a customer |
| `PUT` | `/customers/:id` | Update a customer |
| `DELETE` | `/customers/:id` | Delete a customer |

---

## 🗺 Roadmap

Here are planned improvements for future versions:

- [ ] 🔐 Add user authentication (login / register)
- [ ] 🔍 Add customer search and filter functionality
- [ ] 📄 Add pagination for large customer lists
- [ ] 📊 Add a dashboard with customer statistics
- [ ] 🌐 Migrate front end to React.js (coming soon)
- [ ] 🐳 Add Docker support for easy deployment
- [ ] ☁️ Deploy to a cloud platform (e.g., Railway, Render, or Vercel)

---

## 🤝 Contributing

Contributions are welcome and appreciated! To contribute:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** and describe your changes

Please make sure your code follows clean code conventions and is well tested.

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Mohamed Hashem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Mohamed Hashem**

- GitHub: [@mohamed-hashem182005](https://github.com/mohamed-hashem182005)

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!** ⭐

</div>
