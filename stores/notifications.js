// store/auth.js
import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      notifications: [],
    };
  },

  actions: {
        addNotification(notificationMessage, status) {
            const notification = {
            id: this.generateId(),
            message: notificationMessage,
            status: status || '',
            timeRemaining: 7 // seconds, adjust as needed
            };
            
            this.notifications.push(notification);
            this.startCountdown(notification.id);
        },
  
        generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },

        removeNotification(id) {
            this.notifications = this.notifications.filter(notification => notification.id !== id);
        },

        startCountdown(id) {
            const notification = this.notifications.find(notification => notification.id === id);
            if (!notification) return;
      
            const countdown = setInterval(() => {
              notification.timeRemaining--;
              if (notification.timeRemaining <= 0) {
                clearInterval(countdown);
                this.removeNotification(id);
              }
            }, 1000);
        },
  	},
});
