import * as Notifications from 'expo-notifications';
import { getDailyQuote } from '../utils/getDailyQuote';
import { getSeason } from '../utils/getSeason';
import { getSeasonalQuote } from '../utils/getDailyQuote';
import { recordNotificationDelivered } from '../analytics/AnalyticsManager';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

Notifications.addNotificationReceivedListener(() => {
  recordNotificationDelivered();
});

export async function registerForPushNotifications() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleDailyQuote(time = { hour: 8, minute: 0 }) {
  await Notifications.cancelAllScheduledNotificationsAsync();

  const { quote, category } = getDailyQuote();
  const season = getSeason();
  const seasonal = getSeasonalQuote(season);

  await Notifications.scheduleNotificationAsync({
  content: {
    title: `Daily Motivation (${season})`,
    body: `${quote} — ${category.toUpperCase()} | ${seasonal}`,
    data: { delivered: true }
  },
  trigger: {
    hour: time.hour,
    minute: time.minute,
    repeats: true,
  },
});
}
