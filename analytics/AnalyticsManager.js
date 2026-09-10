import AsyncStorage from '@react-native-async-storage/async-storage';

// Increment a counter
async function increment(key) {
  const value = await AsyncStorage.getItem(key);
  const num = value ? parseInt(value) : 0;
  await AsyncStorage.setItem(key, (num + 1).toString());
}

// Add journal entry analytics
export async function recordJournalEntry() {
  await increment('journal_total');

  const today = new Date().toISOString().split('T')[0];
  await increment(`journal_day_${today}`);

  const month = new Date().toISOString().slice(0, 7);
  await increment(`journal_month_${month}`);
}

// Track quote refreshes
export async function recordQuoteRefresh() {
  await increment('quote_refresh_total');
}

// Track notification delivery
export async function recordNotificationDelivered() {
  await increment('notification_total');
}

// Track category usage
export async function recordCategoryUse(category) {
  await increment(`category_${category}`);
}

// Get all analytics
export async function getAnalytics() {
  const keys = await AsyncStorage.getAllKeys();
  const data = await AsyncStorage.multiGet(keys);

  const analytics = {};
  data.forEach(([key, value]) => {
    analytics[key] = value;
  });

  return analytics;
}
