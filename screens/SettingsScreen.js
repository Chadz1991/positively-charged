import { View, Text } from 'react-native';
import { themes } from '../theme/SeasonalThemes';

export default function SettingsScreen() {
  const theme = themes.autumn;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text }}>
        Settings
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>
        Theme Selector (coming soon)
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>
        Notification Time (coming soon)
      </Text>
    </View>
  );
}
