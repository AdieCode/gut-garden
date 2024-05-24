<template>
    <div>
        <img :src="imageSource" alt="">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imageSource: { type: String, default: '' },
});
</script>

<style scoped>
/* Your styles here */
</style>