<template>
    <div class="auth-container">
        <!-- logo and back button -->
        <div class="auth-top center"> 
            <img src="~/assets/images/logo-img.webp" alt="logo" class="logo">
            <border-button text="Back" width="180" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
        </div>

        <!-- for user Sign-up -->
        <div class="signup-container center column mt-20">
            <h1 class="mb-40">Sign up</h1>
            <form autocomplete="off">
                <divider-line text="username" width="330" class="mt-10 mb-30"/>
                <div class="mb-50">
                    <border-edit label="Username" placeholder="Username" width="390" height="50" class="mb-30" notification=""/>
                </div>
                <divider-line text="email" width="330" class="mt-10 mb-30"/>
                <div class="mb-50">
                    <border-edit label="Email" placeholder="Email" width="390" height="50" class="mb-40" :triger="addValueEmail"/>
                    <border-edit label="Confirm email" placeholder="Confirm email" width="390" height="50" :notification="emailNotification" :triger="addValueAndVerifyEmail"/>
                </div>
                <divider-line text="password" width="330" class="mt-10 mb-30"/>
                <div class="password" >
                    <div class="password">
                        <border-edit label="Password" placeholder="Password" width="390" height="50"class="mb-40" :type="firstPasswordType" :notification="passwordNotification" :triger="addValuePassword"/>
                        <img v-if="firstPasswordType === 'password'" src="~assets/images/eye.webp" alt="eye" @click="passwordFirstToggle">
                        <img v-else src="~assets/images/eye-invisible.png" alt="eye" @click="passwordFirstToggle">
                    </div>
                    <div class="password">
                        <border-edit label="Confirm password" placeholder="Confirm password" width="390" height="50" :type="secondPasswordType" :notification="passwordConfirmNotification" :triger="addValueAndVerifyPassword"/>
                        <img v-if="secondPasswordType === 'password'" src="~assets/images/eye.webp" alt="eye" @click="passwordSecondToggle">
                        <img v-else src="~assets/images/eye-invisible.png" alt="eye" @click="passwordSecondToggle">
                    </div>
                    <!-- <img src="~assets/images/eye.webp" alt="eye"> -->
                </div>
                <br>    

                <divider-line text="finish" width="330" class="mt-30 mb-20"/>
                <div class="auth-options center">
                    <solid-button text="Sign up" width="280" height="60" class="bold" fontSize="24" :triger=" submitForm" />
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const authStore = useAuthStore();
const notificationStore = useNotificationStore();

const firstPasswordType = ref('password');
const secondPasswordType = ref('password');

const usernameText = ref('fdsdfs');
const emailText = ref('');
const emailConfrimText = ref('');
const passwordText = ref('');
const passwordConfirmText = ref('');

const emailNotification = ref('');
const passwordNotification = ref('');
const passwordConfirmNotification = ref('');

const usernameCorrect = ref(true);
const emailMacthes = ref(false);
// const passwordCorrect = ref(false);
const passwordMacthes = ref(false);


function passwordFirstToggle(){
    if (firstPasswordType.value === 'password'){
        firstPasswordType.value = 'text'
    } else {
        firstPasswordType.value = 'password'
    }
}


function passwordSecondToggle(){
    if (secondPasswordType.value === 'password'){
        secondPasswordType.value = 'text'
    } else {
        secondPasswordType.value = 'password'
    }
}

function toLogin() {
    router.push("/auth/login");
}

function submitForm() {
    if (usernameCorrect && emailMacthes && passwordMacthes){
        const isSignedUp = authStore.signUp(usernameText.value, emailConfrimText.value, passwordConfirmText.value)

        if (isSignedUp) {
            notificationStore.addNotification('Sign up failed');
        }
    }
    router.push("/auth/login");
}

function addValueEmail (value){
    emailText.value = value;
    compareEmail()
}

function addValueAndVerifyEmail (value) {
    emailConfrimText.value = value;
    compareEmail();
}

function addValuePassword (value) {
    passwordText.value = value;
    if (checkPassword(value)) {
        comparePasswords()
    }
}

function addValueAndVerifyPassword (value) {
    passwordConfirmText.value = value;
    comparePasswords()
}

function verifyEmail (value) {
    if (emailText.value !== emailConfrimText.value) {
        emailNotification.value = 'email does not match'
    } else {
        emailNotification.value = ''
    }
}

function checkPassword(password) {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const minLength = 6;

    if (!specialCharacterRegex.test(password)) {
        passwordNotification.value = 'Password must contain at least one special character.';
        return false
    } else if (!numberRegex.test(password)) {
        passwordNotification.value = 'Password must contain at least one number.';
        return false
    } else if (password.length < minLength) {
        passwordNotification.value = 'Password must be at least 6 characters long.';
        return false
    } else {
        passwordNotification.value = '';
        return true
    }
}

function compareEmail () {

    if (emailText.value !== emailConfrimText.value) {
        emailNotification.value = 'email does not match'
        emailMacthes.value = false;
    } else {
        emailNotification.value = ''
        emailMacthes.value = true;
    }
}

function comparePasswords () {
    if (passwordText.value !== passwordConfirmText.value) {
        passwordConfirmNotification.value = 'password does not match'
        passwordMacthes.value = false;
    } else {
        passwordConfirmNotification.value = ''
        passwordMacthes.value = true;
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

.signup-container{
    width: 100%;
    /* animation: fade-out-left 1s 3s forwards; */
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
</style>
