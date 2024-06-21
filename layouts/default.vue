<template>
    <div class="notifications-display">
        <div v-for="notification in notificationStore.notifications" :key="notification.id" class="notification center" :class="notification.status">
            <img src="/assets/icons/exclamation.png" alt="">
            <p>{{ notification.message }}</p>
            <div class="cancel" @click="removeNotification(notification.id)">
                <img src="/assets/icons/wrong-black.png" alt="">
            </div>
        </div>
    </div>
    <div>
        <slot/>
    </div>
</template>

<script setup>
const notificationStore = useNotificationStore();

function removeNotification (id) {
    notificationStore.removeNotification(id)
}
</script>

<style lang="css" scoped>
.notifications-display{
    z-index: 4;
    color: var(--bg-color);
    font-size: 18px;
    font-weight: 600;
    position: fixed;
    bottom: 40px;
    right: 40px;
    max-height: 80dvh;
    /* justify-content: flex-end; */
}
    
.notification{
    position: relative;
    width: 300px;
    padding: 15px;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 10px;
    transform: translateX(500px); /* Start off-screen */
    opacity: 0; /* Start invisible */
    background-color: var(--error-color);
    animation: showNotification 0.5s ease-out forwards, slideAway 0.6s ease-out 6.5s forwards;
}
.notification p{
    width: 200px;
    height: auto;
}

.notification img{
    width: 40px;
    height: auto;
}

.cancel img{
    width: 28px;
    /* padding: 5px; */
    height: auto;
}

.cancel{
    transition: 0.3s;
    border-radius: 5px;
    cursor: pointer;
}

.cancel:hover{
    background-color: #ffffff25;
}

.error {
    background-color: var(--error-color);
}

.warning {
    background-color: var(--warning-color);
}

.success {
    background-color: var(--success-color);
}
            
            @keyframes showNotification {
                0%{
                    transform: translateX(500px);
                    opacity: 0;
                    }
    60%{
        transform: translateX(-20px);

    }
    80%{
        transform: translateX(10px);

    }
    100%{
        transform: translateX(0px);
        opacity: 1;

    }
}

@keyframes slideAway {
    0%{
        transform: translateX(0px);
    }
    60%{
        transform: translateX(-20px);
        opacity: 1; 
    }
    100%{
        transform: translateX(500px);
        opacity: 0;
    }
}

@media (max-width: 700px){

    .notifications-display{
        font-size: 18px;
        font-weight: 600;
        position: fixed;
        bottom: 20px;
        right: 20px;
        max-height: 80dvh;
        /* justify-content: flex-end; */
    }

    .notification{
        width: 230px;
        padding: 8px;
    }
    .notification p{
        width: 145px;
        font-size: 14px;
        height: auto;
        /* background-color: aqua; */
    }

    .notification img{
        width: 30px;
        height: auto;
    }

    .cancel img{
        width: 26px;
        padding: 5px;
        height: auto;
    }

}
</style>