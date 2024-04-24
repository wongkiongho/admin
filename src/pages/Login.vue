<template>
    <div class="login-container">
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="loginForm.email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="loginForm.password" required>
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle the login logic here
            console.log("Logged in with:", this.loginForm);
            // Redirect after login
            this.$router.replace({ name: 'dashboard' });
        }
    }
}
</script>

<style>
.login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>