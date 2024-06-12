
<template>
    <nav v-if="isLargeScreen">
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
        <border-button :text="buttonText" width="180" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
    </nav> 

    <nav v-else>
        <!-- logo -->
        <img src="/assets/images/logo-img.webp" alt="logo" class="logo">

        <!-- middle section of nav bar -->
         <div class="center column end">

             <img src="/assets/icons/menu.svg" alt="menu" class="menu" @click="toggleMenu">
             <div class="nav-options column" v-if="showMenu">
                 <nuxt-link to="" class="nav-option inlarge">Why</nuxt-link>
                 <nuxt-link to="" class="nav-option inlarge">How</nuxt-link>
                 <nuxt-link to="" class="nav-option inlarge">Pricing</nuxt-link>
                 <nuxt-link to="" class="nav-option inlarge">Help</nuxt-link>
                 <nuxt-link to="" class="nav-option inlarge">Contact</nuxt-link>
                 <border-button :text="'Login'" width="180" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
             </div>
         </div>
        
        <!-- login button -->
    </nav> 

    <section class="first-section space-evenly">
        <div class="description">
            <h1>Let’s fix your diet</h1>
            <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
            <border-button :text="buttonText" width="200" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
        </div>
        <div class="image float-animation">
            <!-- <img src="~/assets/images/avocado.webp" alt="" srcset=""> -->
            <image-container :imageSource="avocadoImageSource" width="500" height="auto"/>
        </div>
    </section>
</template>

<script setup>
import avocadoImageSource from '@/assets/images/avocado.webp';
import { ref, watch } from 'vue';
const router = useRouter()
const authStore = useAuthStore();
const showMenu = ref(false);

const buttonText = ref('Get Started');
const isLargeScreen = ref(true);
function toLogin() {
    router.push("/auth/login");
}

watch(() => authStore.isAuthenticated, (isAuth) => {
  buttonText.value = isAuth ? 'Dashboard' : 'Get Started';
}, { immediate: true });


const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth > 600;
};

function toggleMenu () {
    showMenu.value = !showMenu.value;
}

onMounted(() => {
    if (process.client) {
        checkScreenSize(); // Check initially
    }
});

onUpdated(() => {
    if (process.client) {
        checkScreenSize(); // Check initially
    }
});


</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--bg-color);
}

.menu{
    padding: 10px;
    /* border: 2px solid var(--primary-color); */
    border-radius: 5px;
    width: 30px;
    height: auto;
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
    /* margin: 0 1px; */
    transition: 0.2s;
    cursor: pointer;
}

.nav-option:hover{
    transform: translateY(3px);
    padding: 3px 10px;
}

.first-section{
    display: flex;
    width: 100vh;
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