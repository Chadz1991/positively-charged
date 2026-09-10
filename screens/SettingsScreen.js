import { View, Text, TouchableOpacity } from 'react-native';
import { themes } from '../theme/SeasonalThemes';
import { scheduleDailyQuote } from '../notifications/NotificationManager';


export default function SettingsScreen() {
  const theme = themes.autumn;

  const setNotificationTime = async (hour, minute) => {
    await scheduleDailyQuote({ hour, minute });
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text }}>
        Settings
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>
        Notification Time
      </Text>

      <TouchableOpacity onPress={() => setNotificationTime(7, 0)}>
        <Text style={{ marginTop: 10, fontSize: 18, color: theme.text }}>
          7:00 AM
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setNotificationTime(8, 0)}>
        <Text style={{ marginTop: 10, fontSize: 18, color: theme.text }}>
          8:00 AM
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setNotificationTime(9, 0)}>
        <Text style={{ marginTop: 10, fontSize: 18, color: theme.text }}>
          9:00 AM
        </Text>
      </TouchableOpacity>
    </View>
  );
}
