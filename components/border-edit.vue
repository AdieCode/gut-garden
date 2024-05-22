<template>
    <div class="edit-container">
        <input :type="type" class="edit" :placeholder="placeholder"
            :style="{
                'min-width': width + 'px',
                'max-width': width + 'px',
                'min-height': height + 'px',
                'max-height': height + 'px',
                border: '1px solid ' + border,
                background: bg,
                'font-size': fontSize + 'px'
            }">
        </input>
        <div class="label">
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
})

</script>

<style lang="css" scoped>
.edit-container{

    position: relative;
}
input:-webkit-autofill {
  background-color: var(--bg-color)  !important; /* Set your background color */
  color: var(--primary-color) !important; /* Set your text color */
}
.edit {
    border-radius: 10px;
    font-weight: 200;
    transition: 0.1s;
    padding: 0px 15px;
    color: var(--primary-color);
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
    border-radius: 2px;
}

/* .edit:focus-within{
    background-color: #ffffff32 !important;
} */


</style>