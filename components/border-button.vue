<template>
<div class="button center" :class="currentClickState" @mousedown="mouseDown"
    :style="{
        'min-width': width + 'px',
        'min-height': height + 'px',
        border: '1px solid ' + border,
        background: bg
    }">
    {{ text }}   
</div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const currentClickState = ref('');
  
const props = defineProps({
    text: { type: String, default: 'Default Text' },
    width: { type: String, default: '100' },
    height: { type: String, default: '50' },
    border: { type: String, default: 'var(--accent-color)' },
    bg: { type: String, default: 'var(--bg-color)' },
})

</script>

<style lang="css" scoped>
.button {
    border-radius: 10px;
    font-weight: 200px;
    cursor: pointer;
    transition: 0.2s;
}

.button:hover {
    background-color: #ffffff32 !important;
}

</style>