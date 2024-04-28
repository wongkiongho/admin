<template>
    <div>
      <h1>Login</h1>
      
      <button @click="goDashboard">Send Sign-In Link</button>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {

      };
    },
    methods: {
      goDashboard() {
        this.$router.push({ name: 'dashboard' }); // Navigate using the route name
      },

    },
    mounted() {

    }
  };
  </script>
  