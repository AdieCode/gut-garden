<template>
    <div>
        <img :src="imageSrouce" alt="">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imageSrouce: { type: String, default: '' },
});

</script>
