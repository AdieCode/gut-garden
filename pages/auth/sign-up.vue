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
                    <border-edit label="Username" placeholder="Username" width="390" height="50" class="mb-30" notification="*already taken"/>
                </div>
                <divider-line text="email" width="330" class="mt-10 mb-30"/>
                <div class="mb-50">
                    <border-edit label="Email" placeholder="Email" width="390" height="50" class="mb-30" notification="emails  don't match"/>
                    <border-edit label="Confirm email" placeholder="Confirm email" width="390" height="50" notification="emails don't  match"/>
                </div>
                <divider-line text="password" width="330" class="mt-10 mb-30"/>
                <div class="password" >
                    <border-edit label="Password" placeholder="Password" width="390" height="50"class="mb-30" autocomplete="password"/>
                    <border-edit label="Confirm password" placeholder="Confirm password" width="390" height="50"/>
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

function toLogin() {
    router.push("/auth/login");
}

function submitForm() {
    router.push("/auth/login");
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
</style>
