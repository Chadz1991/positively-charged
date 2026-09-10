import { View, Text, Image, TouchableOpacity } from 'react-native';
import { themes } from '../theme/SeasonalThemes';

export default function HomeScreen({ navigation }) {
  const theme = themes.autumn;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Image source={require('../assets/logo.png')} style={{ width: 120, height: 120, alignSelf: 'center' }} />

      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text, textAlign: 'center', marginTop: 20 }}>
        Rise gently, grow bravely.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Text style={{ marginTop: 40, fontSize: 20, color: theme.accent }}>Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
        <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Subscription')}>
        <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>Subscription</Text>
      </TouchableOpacity>

    </View>
  );
}
