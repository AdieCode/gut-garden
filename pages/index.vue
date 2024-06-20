<template>
    <div :class="{'no-scroll': isMenuVisible}">
      <nav class="center space-between hide-x-overflow">
        <!-- logo -->
        <img src="~/assets/images/logo-img.webp" alt="logo" class="logo">
      
        <!-- middle section of nav bar -->
        <div :class="['center', 'space-between', 'nav-options', { 'visible': isMenuVisible }]">
          <div @click="toggleMenu" class="close-btn mr-20 second-btn"><img src="~/assets/icons/wrong-white.png" alt="close menu icon"></div>

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
          <border-button :text="buttonText" width="160" height="60" class="mt-10 second-btn" fontSize="24" :triger="toLogin"/>
        </div>

        <!-- hamburger menu for mobile -->
        <div @click="toggleMenu" class="hamburger-btn mr-20 second-btn"><img src="~/assets/icons/menu.svg" alt="logo" class="logo "></div>
      
        <!-- login button -->
        <border-button :text="buttonText" width="180" height="60" class="mr-10 first-btn" fontSize="24" :triger="toLogin"/>
      </nav>
  
      <section class="first-section center space-evenly ml-20 mr-20  hide-x-overflow">
        <div class="description">
          <h1>Let’s fix your diet</h1>
          <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
          <border-button :text="buttonText" width="200" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
        </div>
        <div class="image center">
          <img src="/assets/images/avocado.webp" alt="">
        </div>
      </section>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const router = useRouter()
const authStore = useAuthStore();

const buttonText = ref('Get Started');
const isMenuVisible = ref(false);

function toLogin() {
    router.push("/auth/login");
}

function toggleMenu() {
    isMenuVisible.value = !isMenuVisible.value;
}

watch(() => authStore.isAuthenticated, (isAuth) => {
buttonText.value = isAuth ? 'Dashboard' : 'Get Started';
}, { immediate: true });

</script>

<style scoped>

nav {
    padding: 20px 0px;
    z-index: 3;
    position: fixed;
    width: 100%;
    background-color: var(--bg-color);
    /* box-shadow: -10px 0 15px rgba(0, 0, 0, 0.3); */
}

.logo {
    width: 200px;
    height: auto;
    cursor: pointer;
}

.hamburger-btn img{
    /* display: none; */
    background: var(--bg-color);
    border: none;
    width: 24px;
    height: auto;
    cursor: pointer;
}

.first-section{
    padding-top: 200px;
    margin: 0px 55px;
}

.close-btn{
    position: absolute;
    top: 10px;
    right: 0px;
    padding: 20px 0px;
}

.close-btn img{
    width: 36px;
    height: auto;
}

.first-btn{
    opacity: 1;
}

.second-btn{
    display: none;
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
}

.description {
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
    min-width: 350px;
    max-width: 650px;
    width: 80%;
    height: auto;
}

@media (max-width: 900px) {
    .first-section {
        padding-top: 100px;
        flex-direction: column-reverse;
        align-items: center;
    }
}

@media (max-width: 1140px) {
    nav {
        justify-content: space-between;
    }

    .nav-option {
        padding: 10px 0px;
    }

    .nav-options {
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: var(--bg-color);
        width: 100%;
        height: 100vh;
        box-shadow: -10px 0 15px rgba(0, 0, 0, 0.3);
        display: none;
    }

    .nav-options.visible {
        display: flex;
    }

    .first-btn {
        display: none;
    }

    .second-btn {
        display: inline-flex;
    }

    .hamburger-btn {
        display: block;
    }

    .no-scroll {
        overflow-y: none;
    }

    .logo {
        margin-left: 20px;
        width: 150px;
    }

    .description {
        max-width: 500px;
        line-height: 1.5;
    }

    .description h1{
        font-size: 48px;
    }

    .description p{
        font-size: 20px;
    }
}

</style>
  