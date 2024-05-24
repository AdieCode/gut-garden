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
        <div v-if="!imageSource"
        class="background"
        :style="{
                'min-width': width + 'px',
                'max-width': width + 'px',
                'min-height': height + 'px',
                'max-height': height + 'px',
            }"
            >

        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    imageSource: { type: String, default: '' },
    width: { type: String, default: '100' },
    height: { type: String, default: '100' },
});
</script>

<style scoped>
.background {
    background-color: var(--primary-color);
}
</style>