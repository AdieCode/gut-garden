<template>
    <div class="auth-container">
        <!-- logo and back button -->
        <div class="auth-top center"> 
            <img src="~/assets/images/logo-img.webp" alt="logo" class="logo">
            <border-button text="Back" width="180" height="60" class="mr-10" fontSize="24" :triger="toMain"/>
        </div>
    
        <!-- for user Auth -->
        <div class="login-container center column mt-20">
            <h1 class="mb-40">Login</h1>
            <form>
                    <div class="mb-40">
                        <border-edit label="Email" placeholder="Email" width="390" height="50" :triger="addValueEmail"/>
                    </div>

                    <div class="password">
                        <border-edit label="Password" placeholder="Password" width="390" height="50" :type="passwordType" :triger="addValuePassword"/>
                        <img v-if="passwordType === 'password'" src="~assets/images/eye.webp" alt="eye" @click="passwordToggle">
                        <img v-else src="~assets/images/eye-invisible.png" alt="eye" @click="passwordToggle">
                    </div>
                    <br>    

                <!-- <hr class="spacing-line" /> -->
                <divider-line width="330" class="mt-10 mb-20"/>
                <div class="auth-options space-between">
                    <solid-button text="Login" width="260" height="60" class="mr-10 bold" fontSize="24" :triger="validateForm"/>
                    <border-button text="Sign up" width="140" height="60" class="bold" fontSize="24" :triger=" toSignUp"/>
                </div>
                <divider-line text="or login with" width="330" class="mt-30 mb-20"/>
            </form>

            <!-- OAuth options -->
            <div class="other-login space-between">
                <div class="other-login-options button-border space-evenly mr-10">
                    <img src="~assets/images/google.webp" alt="">
                    <span class="ml-10 mr-10">Google</span>
                </div>
                <div class="other-login-options button-border space-evenly ml-10">
                    <img src="~assets/images/github.webp" alt="">
                    <span class="ml-10 mr-10">Github</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const authStore = useAuthStore();
const notificationStore = useNotificationStore();
// we could also extract the data, but it's already present in the store

const passwordType = ref('password');
const email = ref('');
const password = ref('');

function addValueEmail(value) {
    email.value = value;
}

function addValuePassword(value) {
    password.value = value;
}

const router = useRouter()

async function toMain() {
    router.push("/");

}

function toSignUp() {
    router.push("/auth/sign-up");
}

async function validateForm() {
    const isAuth = await authStore.login(email.value, password.value)
    if (isAuth) {
        router.push("/");
        notificationStore.addNotification('Login successful', 'success');
    } else {
        notificationStore.addNotification('Login failed', 'error');
    }
}

function passwordToggle(){
    if (passwordType.value === 'password'){
        passwordType.value = 'text'
    } else {
        passwordType.value = 'password'
    }
}

// Function to handle user login
async function loginUser(email, password) {
  try {
    // Make a POST request to your login endpoint
    const response = await axios.post(`http://localhost:3001/login`, { email, password });

    // Check if the response contains a token
    const token = response.data.token;
    if (token) {
      // If a token is received, store it in local storage
    if(process.client) {
        localStorage.setItem("token", token)
    }
      // Redirect the user to the main page or wherever you want them to go after successful login
      router.push("/main"); // Assuming you have imported and defined `router` from vue-router
    } else {
      // Handle the case where no token is received
      console.error('No token received after login');
    }
  } catch (error) {
    // Handle login error
    console.error('Error logging in:', error.response.data);
    // You can display an error message to the user here
  }
}

</script>

<style lang="css" scoped>
.auth-top {
    width: 100%;
    display: flex;
    justify-content: space-between;

}

.logo {
    width: 200px;
    height: auto;
    margin-left: 10px;
    cursor: pointer;
}

.auth-container{
    width: 100%;
}

.login-container{
    min-width: 400px;
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
}

.login-container h1{
    font-size: 40px;
}

.password{
    position: relative;
}

.password img{
    position: absolute;
    top: 4px;
    right: -70px;
    width: 40px;
    height: auto;
    cursor: pointer;
}

.other-login img{
    width: 40px;
    height: auto;
}

.other-login-options{
    cursor: pointer;
    font-size: 24px;
    font-weight: 200;
}
</style>