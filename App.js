import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { registerForPushNotifications, scheduleDailyQuote } from './notifications/NotificationManager';

export default function App() {
  useEffect(() => {
    async function init() {
      const granted = await registerForPushNotifications();
      if (granted) {
        scheduleDailyQuote(); // Default 8:00 AM
      }
    }
    init();
  }, []);

 return (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
