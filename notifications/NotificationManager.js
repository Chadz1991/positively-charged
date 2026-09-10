import * as Notifications from 'expo-notifications';

// How notifications behave when received
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Request permission
export async function registerForPushNotifications() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

// Schedule daily notification
export async function scheduleDailyQuote(time = { hour: 8, minute: 0 }) {
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Daily Motivation',
      body: 'Your daily boost is ready ✨',
    },
    trigger: {
      hour: time.hour,
      minute: time.minute,
      repeats: true,
    },
  });
}
