
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export class NotificationService {
  static async requestPermissions(): Promise<boolean> {
    try {
      console.log('Requesting notification permissions...');
      
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      console.log('Notification permission status:', finalStatus);
      return finalStatus === 'granted';
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
      return false;
    }
  }

  static async sendTestNotification(): Promise<void> {
    try {
      console.log('Sending test notification...');
      
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        console.log('Notification permission not granted');
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Student System Test 📚",
          body: "This is a test notification from your Student System app!",
          data: { 
            type: 'test',
            timestamp: new Date().toISOString(),
            screen: 'dashboard'
          },
        },
        trigger: null, // Send immediately
      });
      
      console.log('Test notification sent successfully');
    } catch (error) {
      console.error('Error sending test notification:', error);
    }
  }

  static async sendScheduledNotification(title: string, body: string, seconds: number): Promise<void> {
    try {
      console.log(`Scheduling notification for ${seconds} seconds from now...`);
      
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        console.log('Notification permission not granted');
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data: { 
            type: 'scheduled',
            timestamp: new Date().toISOString(),
            screen: 'dashboard'
          },
        },
        trigger: { seconds },
      });
      
      console.log(`Scheduled notification set for ${seconds} seconds`);
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  }

  static async sendClassReminder(): Promise<void> {
    try {
      console.log('Sending class reminder notification...');
      
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        console.log('Notification permission not granted');
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Class Reminder 🎓",
          body: "Don't forget! You have Mathematics class in 15 minutes.",
          data: { 
            type: 'class_reminder',
            timestamp: new Date().toISOString(),
            screen: 'schedules'
          },
        },
        trigger: null,
      });
      
      console.log('Class reminder notification sent');
    } catch (error) {
      console.error('Error sending class reminder:', error);
    }
  }

  static async sendAssignmentReminder(): Promise<void> {
    try {
      console.log('Sending assignment reminder notification...');
      
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        console.log('Notification permission not granted');
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Assignment Due Soon! 📝",
          body: "Your Physics homework is due tomorrow. Don't forget to submit it!",
          data: { 
            type: 'assignment_reminder',
            timestamp: new Date().toISOString(),
            screen: 'courses'
          },
        },
        trigger: null,
      });
      
      console.log('Assignment reminder notification sent');
    } catch (error) {
      console.error('Error sending assignment reminder:', error);
    }
  }

  static async cancelAllNotifications(): Promise<void> {
    try {
      console.log('Cancelling all scheduled notifications...');
      await Notifications.cancelAllScheduledNotificationsAsync();
      console.log('All notifications cancelled');
    } catch (error) {
      console.error('Error cancelling notifications:', error);
    }
  }
}
