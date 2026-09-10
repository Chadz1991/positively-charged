import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { themes } from '../theme/SeasonalThemes';

export default function JournalScreen() {
  const theme = themes.autumn;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text }}>
        Today's Reflection
      </Text>

      <TextInput
        multiline
        placeholder="Write your thoughts..."
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          height: 300
        }}
      />

      <TouchableOpacity>
        <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>
          Save Entry
        </Text>
      </TouchableOpacity>
    </View>
  );
}
