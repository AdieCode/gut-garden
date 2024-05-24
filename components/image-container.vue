<template>
    <div>
        <img :src="imageSource" alt=""
        :style="{
                'min-width': width + 'px',
                'max-width': width + 'px',
                'min-height': height + 'px',
                'max-height': height + 'px',
            }"
        >
        <div v-if="imageSource"
        :style="{
                'min-width': width + 'px',
                'max-width': width + 'px',
                'min-height': height + 'px',
                'max-height': height + 'px',
                background: 'var(--accent-color)',
            }"
            >

        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imageSource: { type: String, default: '' },
    width: { type: String, default: '100' },
    height: { type: String, default: '100' },
});
</script>

<style scoped>
/* Your styles here */
</style>