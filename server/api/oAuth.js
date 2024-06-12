
// import { useNotificationStore } from '~/stores/notification';
// import { createPinia } from 'pinia';

// const pinia = createPinia();
// createApp(App).use(pinia)

// const  useNotificationStore = require('@/stores/notification');
// import { createPinia } from 'pinia'
// import { createApp } from 'vue'

// //  fails because it's called before the pinia is created
// const pinia = createPinia()
// const app = createApp()
// app.use(pinia)


// export default defineEventHandler((event) => {
//     try { 
//         const notificationStore = useNotificationStore();
//         notificationStore.addNotification('wow')
//     } catch {
//         console.log('There is an error')
//     }
//   return {
//     message: 'Hello, Nuxt 3 API!',
//   };
// });







// import { useNotificationStore } from '@/stores/notification';

// export default defineEventHandler(() => {
//   try {
//     const notificationStore = useNotificationStore();
//     notificationStore.addNotification('wow');
//   } catch (error) {
//     console.error('Error:', error);
//   }

//   return () => {
//     return {
//       message: 'Hello, Nuxt 3 API!'
//     };
//   };
// });