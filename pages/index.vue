
<template>
    <div class="full-width">
        <nav v-if="isLargeScreen" class="center space-between">
            <!-- logo -->
            <img src="/assets/images/logo-img.webp" alt="logo" class="logo">
    
            <!-- middle section of nav bar -->
            <div class="center space-between">
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
    
        <nav v-else class="center space-between">
            <!-- logo -->
            <img src="/assets/images/logo-img.webp" alt="logo" class="logo">
    
            <!-- middle section of nav bar -->
             <div class="center column end">
    
                 <img src="/assets/icons/menu.svg" alt="menu" class="menu" @click="toggleMenu">
                 <div class="nav-options center column" v-if="showMenu">
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
    
        <section class="first-section center space-evenly ml-20 mr-20">
            <div class="description">
                <h1>Let’s fix your diet</h1>
                <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
                <border-button :text="buttonText" width="200" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
            </div>
            <div class="image float-animation">
                <image-container :imageSource="avocadoImageSource" width="500" height="auto"/>
            </div>
        </section>
    </div>
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
    isLargeScreen.value = window.innerWidth > 1100;
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
    width: 100%;
    /* z-index: 3; */
    /* background-color: var(--warning-color); */
    /* background-color: aqua; */
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
    cursor: pointer;
}

.nav-options {
    justify-content: space-between;
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

.first-section{
    width: 100%;
    margin-top: 100px;
    /* overflow: hidden; */
}

.description {
    /* min-width: 400px; */
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
    max-width: 500px;
    height: auto;
}

@media (max-width: 900px) {
    .first-section {
        flex-direction: column-reverse;
        align-items: center; /* Center content in column layout */
    }
}
</style>