<!-- src/components/ForgotPassword.vue -->
<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Forgot Password</h2>
      <form @submit.prevent="handleForgotPassword">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <button type="submit">Send Reset Link</button>
        <p v-if="message" class="message">{{ message }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <a href="#" @click.prevent="$router.push('/')">Back to Login</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios'; // Import your axios instance

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      message: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleForgotPassword() {
      try {
        const response = await axios.post('/api/forgot-password', {
          email: this.email,
        });

        if (response.data.success) {
          this.message = 'Reset link sent to your email';
        } else {
          this.errorMessage = 'Failed to send reset link. Please try again.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

.auth-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

a {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 15px;
}

.message {
  color: green;
  margin-top: 15px;
}
</style>
