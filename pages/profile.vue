
<template class="hide-x-overflow ">
    <div class="  ">
        <nav class="center space-between hide-x-overflow">
            <!-- logo -->
            <img src="~/assets/images/logo-img.webp" alt="logo" class="logo ">
    
            <!-- middle section of nav bar -->
            <div class="center space-between nav-options">
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
                <border-button :text="buttonText" width="180" height="60" class="mt-10 second-btn" fontSize="24" :triger="toLogin"/>
                <div class="nav-bg second-btn">

                </div>
            </div>
    
            <!-- login button -->
            <border-button :text="buttonText" width="180" height="60" class="mr-10 first-btn" fontSize="24" :triger="toLogin"/>
        </nav> 

        <section class="first-section center space-evenly ml-20 mr-20 hide-x-overflow ">
            <div class="description">
                <h1>Let’s fix your diet</h1>
                <p>GutGarden is a revolutionary web application designed to empower users with personalized nutrition tailored to them.</p>
                <border-button :text="buttonText" width="200" height="60" class="mr-10" fontSize="24" :triger="toLogin"/>
            </div>
            <div class="image center">
                <img src="/assets/images/avocado.webp" alt="">
                <!-- <image-container :imageSource="avocadoImageSource" width="500" height="auto"/> -->
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const router = useRouter()
const authStore = useAuthStore();

const buttonText = ref('Get Started');

function toLogin() {
    router.push("/auth/login");
}

watch(() => authStore.isAuthenticated, (isAuth) => {
  buttonText.value = isAuth ? 'Dashboard' : 'Get Started';
}, { immediate: true });

</script>

<style scoped>
nav {
    /* width: 100vw; */
    padding: 20px 0px;
    /* z-index: 3; */
    /* background-color: var(--warning-color); */
    /* background-color: aqua; */
}

.logo {
    width: 200px;
    height: auto;
    cursor: pointer;
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
    min-width: 400px;
    max-width: 600px;
    width: 80%;
    height: auto;
}

@media (max-width: 900px) {
    /* .first-section {
        flex-direction: column-reverse;
        align-items: center;
    } */
}

/* Media query for mobile devices */
@media (max-width: 1140px) {
  nav {
    justify-content: flex-start;
  }

  .nav-option{
    padding: 10px 0px;
  }

  .nav-options{
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: var(--bg-color);
    height: 100%;
    padding-left: 20px;
    box-shadow: ;
  }

  .first-btn{
    opacity: 0;
  }

  .second-btn{
    display: inline-flex;
  }
}

</style>