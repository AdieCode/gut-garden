
<template>
    <nav>
        <!-- logo -->
        <img src="/assets/images/logo-img.webp" alt="logo" class="logo">

        <!-- middle section of nav bar -->
        <div class="nav-options">
            <div class="nav-option inlarge">
                Why
            </div>
            <div class="nav-option inlarge">
                How
            </div>
            <div class="nav-option inlarge">
                Pricing
            </div>
            <div class="nav-option inlarge">
                Help
            </div>
            <div class="nav-option inlarge">
                Contact
            </div>
        </div>

        <!-- login button -->
        <border-button text="Get started" width="180" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
    </nav> 

    <section class="first-section space-evenly">
        <div class="description">
            <h1>Let’s fix your diet</h1>
            <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
            <border-button text="Get Started" width="200" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
        </div>
        <div class="image float-animation">
            <img src="~/assets/images/avocado.webp" alt="" srcset="">
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function toLogin() {
    router.push("/auth/login");
}

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    width: 200px;
    height: auto;
    margin-left: 10px;
    cursor: pointer;
}

.nav-options {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-option {
    font-size: 24px;
    font-weight: 200;
    padding: 0px 20px;
    margin: 0 1px;
    transition: 0.2s;
    cursor: pointer;
}

.nav-option:hover{
    transform: translateY(3px);
    padding: 3px 10px;
}

.first-section{
    display: flex;
    width: 100%;
    margin-top: 100px;
    padding: 0 20px;
}

.description {
    min-width: 400px;
    max-width: 500px;
    line-height: 1.5;
}

.description h1{
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 40px;
}

.description p{
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 25px;
}

.image img{
    width: 500px;
    height: auto;
}
</style>