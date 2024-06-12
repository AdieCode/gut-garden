
<template>
    <div>
        <nav>
            <!-- logo -->
            <img src="/assets/images/logo-img.webp" alt="logo" class="logo" @click="toMain">
    
            <!-- logout button -->
            <solid-button text="Sign out" width="180" height="60" class="mr-10" fontSize="24" :triger="signOut"/>
        </nav> 
        <!-- Slider main container -->
         <div class="ml-30">

             <Swiper
             :slides-per-view=" 2 "
             :space-between="50"
             :pagination="{ clickable: true }"> 
                 <SwiperSlide v-for="(recipe, index) in recipes" :key="index">
                     <div class="recipe center mt-50 mb-30" @click="iClicked">
                         <img src="~assets/images/food2.jpg" alt="">
                         <div>
                             <h1> {{ recipe.name }} </h1>
                             <div class="left less-visible mt-5 mb-10">
                                 <span> {{ recipe.prepTime }} </span>
                                 <div class="dot"></div>
                                 <span> {{ recipe.cookTime }} </span>
                                 <div class="dot"></div>
                                 <span> {{ recipe.difficulty }} </span>
                             </div>
                             <p class="">{{ recipe.description }}</p>
                             <divider-line text="ingredients" width="300" class="mt-20 mb-20 less-visible" />
                             <tags :items="recipe.ingredients" width="300"/>
                         </div>
                         
                     </div>
                 </SwiperSlide>
             </Swiper>
             <div class="mt-30 float center"> drag or swipe --></div>
         </div>
    </div>
</template>

<script setup>
import  { Swiper, SwiperSlide } from "swiper/vue";
import axios from 'axios';

import "swiper/css";
const router = useRouter()
const authStore = useAuthStore();
const notificationStore = useNotificationStore();

import { ref } from 'vue';
const rec = {
    name: 'Sesame-Crusted Fish',
    prepTime: '20min',
    cookTime: '30min',
    difficulty: 'easy',
    description: 'This dish features tender fish fillets encrusted with a golden sesame seed crust, adding a delightful crunch and nutty flavor. Paired with a refreshing salad of crisp lettuce and juicy tomatoes, lightly dressed with a tangy lemon and Dijon mustard vinaigrette, it offers a perfect balance of flavors and textures. Simple yet elegant, this meal is both healthy and satisfying, making it a great choice for a quick weekday dinner or a light lunch.',
    ingredients: ['tamari', 'tamarind', 'tamale', 'tomatillo']
}
const recipes = ref([rec, rec, rec]);

function toMain() {
    router.push("/")
}
function signOut() {
    authStore.logout()
    router.push("/auth/login");
}

// const screenWidth = window.width;


async function iClicked () {
    // const ola = await axios.get(`http://localhost:3000/api/oAuth`); 
    // console.log('i was clicked', ola);
    notificationStore.addNotification('hi there', 'success');
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


.recipe {
    max-width: 900px;
    width: auto;
    height: auto;
    padding: 100px 10px;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
}

.recipe:hover{
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.399); 
    transform: translateY(-5px);
}

.recipe p{
    max-width: 330px;
    max-height: 76px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines to display */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;
}

.recipe img{
    width: 300px;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
}


@media (max-width: 1500px) {
    .recipe{
        flex-direction: column;
    }

    .recipe img {
        margin-bottom: 20px;
    }

    .swiper-slide{
        max-width: 100%;
    }
}

</style>