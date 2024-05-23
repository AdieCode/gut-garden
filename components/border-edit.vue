<template>
    <div class="edit-container" id="inputId">
        <input :type="type" class="edit" :placeholder="placeholder"
            :style="{
                'min-width': width + 'px',
                'max-width': width + 'px',
                'min-height': height + 'px',
                'max-height': height + 'px',
                border: '1px solid ' + border,
                background: bg,
                'font-size': fontSize + 'px'
            }" 
            @focus="isSelected = true" 
            @blur="isSelected = false" >
        </input>
        <div class="label" :class="isSelected ? 'label-active' : 'label'">
            <span>{{ label }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
    
const props = defineProps({
    label: { type: String, default: 'Default Text' },
    placeholder: { type: String, default: 'Default Text' },
    type: { type: String, default: 'text' },
    width: { type: String, default: '100' },
    height: { type: String, default: '50' },
    border: { type: String, default: 'var(--accent-color)' },
    bg: { type: String, default: 'var(--bg-color)' },
    fontSize: { type: String, default: '24' },
});

const isSelected = ref(false);

</script>

<style lang="css" scoped>
.edit-container{

    position: relative;
}

.edit {
    border-radius: 10px;
    font-weight: 300;
    transition: 0.1s;
    padding: 0px 15px;
    outline: none;
    color: var(--primary-color) !important;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--bg-color) inset;
    -webkit-text-fill-color: var(--primary-color) !important;
}

.edit:hover .label{
    background-color: #ffffff32 !important;
}

.label{
    position: absolute;
    background-color: var(--bg-color);
    padding: 0 10px;
    font-weight: 300;
    top: -12px;
    left: 10px;
    border-radius: 4px;
}

.label-active{
    background-color: var(--primary-color);
    color: var(--bg-color);
    font-weight: 600;
}

.label span{
    opacity: 0.7;
}
/* .edit:focus-within{
    background-color: #ffffff32 !important;
} */


</style>