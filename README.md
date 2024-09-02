# Vue.js Authentication Template

This is a Vue.js authentication template that provides a ready-to-use setup for user login, forgot password, and reset password functionalities. The template includes styled components and integrates with your backend API for user authentication.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Integration](#api-integration)
- [Customization](#customization)

## Features

- **Login**: User login with username and password.
- **Forgot Password**: Request a password reset link via email.
- **Reset Password**: Reset the user's password using a link sent to their email.
- **Responsive Design**: Mobile-friendly and responsive components.
- **Easy Integration**: Plug and play with any backend API for authentication.

## Project Structure

```plaintext
vue-login-template/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LoginForm.vue
│   │   ├── ForgotPasswordForm.vue
│   │   └── ResetPasswordForm.vue
│   ├── views/
│   │   └── Home.vue
│   ├── router/
│   │   └── index.js
│   ├── axios.js
│   ├── App.vue
│   └── main.js
├── .gitignore
├── README.md
└── package.json

## Getting Started

Follow these steps to set up the Vue.js authentication template and integrate it with your backend API.

### Prerequisites

- **Node.js** and **npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).
- **Basic Knowledge**: Familiarity with Vue.js, JavaScript, and RESTful APIs.

### Installation

1. **Clone the Repository**

   Begin by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/tharinduyasantha/vue-login-template.git
   cd vue-login-template

2. **Install Dependencies**

   After navigating to the project directory, install the required dependencies using npm:

   ```bash
   npm install

