<template>
  <button @click="googleSignIn">Sign in with Google</button>
</template>

<script>
import { auth, GoogleAuthProvider, signInWithPopup } from "../../firebase";

export default {
  methods: {
    async googleSignIn() {
      
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Signed in user:', user);
        // Handle signed-in user information or navigate to another page
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    },
    
  }
};
</script>
