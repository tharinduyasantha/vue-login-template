<!-- src/components/ResetPassword.vue -->
<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Reset Password</h2>
      <form @submit.prevent="handleResetPassword">
        <div class="form-group">
          <label for="new-password">New Password</label>
          <input type="password" id="new-password" v-model="newPassword" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Reset Password</button>
        <p v-if="message" class="message">{{ message }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios'; // Import your axios instance

export default {
  name: 'ResetPassword',
  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      message: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleResetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }

      try {
        const response = await axios.post('/api/reset-password', {
          password: this.newPassword,
        });

        if (response.data.success) {
          this.message = 'Password has been reset successfully!';
          this.$router.push('/');
        } else {
          this.errorMessage = 'Failed to reset password. Please try again.';
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
