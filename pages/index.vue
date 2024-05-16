
<template>
    <nav>
        <!-- logo -->
        <img src="/assets/images/logo-img.webp" alt="logo" class="logo">

        <!-- middle section of nav bar -->
        <div class="nav-options">
            <div class="nav-option">
                Why
            </div>
            <div class="nav-option">
                How
            </div>
            <div class="nav-option">
                Pricing
            </div>
            <div class="nav-option">
                Help
            </div>
            <div class="nav-option">
                Contact
            </div>
        </div>

        <!-- login button -->
        <border-button text="Login" class="mr-10"/>
    </nav> 

    <section class="first-section space-evenly">
        <div class="description">
            <h1>Let’s fix your diet</h1>
            <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
        </div>
        <div class="image">
            <img src="~/assets/images/avocado.webp" alt="" srcset="">
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

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
    transition: 0.2s;
    cursor: pointer;
}

.nav-option:hover{
    transform: translateY(3px);
    padding: 3px 10px;
    font-size: 30px;
    font-weight: 500;
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
}

.description h1{
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 40px;
}

.description p{
    font-size: 24px;
    font-weight: 300;
}

.image img{
    width: 500px;
    height: auto;
}
</style>