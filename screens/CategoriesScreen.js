import { View, Text } from 'react-native';
import { themes } from '../theme/SeasonalThemes';

export default function CategoriesScreen() {
  const theme = themes.autumn;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text }}>
        Categories
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>Confidence</Text>
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.accent }}>Leadership</Text>
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.accent }}>Wellness</Text>
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.accent }}>Discipline</Text>
      <Text style={{ marginTop: 10, fontSize: 20, color: theme.accent }}>Growth</Text>
    </View>
  );
}
