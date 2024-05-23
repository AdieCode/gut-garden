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
                        <border-edit label="Email" placeholder="Email" width="390" height="50"/>
                    </div>

                    <div class="password">
                        <border-edit label="Password" placeholder="Password" width="390" height="50" type="password"/>
                        <img src="~assets/images/eye.webp" alt="eye">
                    </div>
                    <br>    

                <!-- <hr class="spacing-line" /> -->
                <divider-line width="330" class="mt-10 mb-20"/>
                <div class="auth-options space-between">
                    <solid-button text="Login" width="260" height="60" class="mr-10 bold" fontSize="24" :triger="toMain"/>
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
const router = useRouter()

function toMain() {
    router.push("/");
}

function toSignUp() {
    router.push("/auth/sign-up");
}

function validateForm() {
    console.log('hello')
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