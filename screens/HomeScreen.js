import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { themes } from '../theme/SeasonalThemes';
import { getDailyQuote, getSeasonalQuote } from '../utils/getDailyQuote';

export default function HomeScreen({ navigation }) {
  const theme = themes.autumn;

  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    loadQuoteOfTheDay();
  }, []);

  const loadQuoteOfTheDay = () => {
    const { quote, category } = getDailyQuote();
    setQuote(quote);
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Image source={require('../assets/logo.png')} style={{ width: 120, height: 120, alignSelf: 'center' }} />

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text, textAlign: 'center', marginTop: 20 }}>
        Quote of the Day
      </Text>

      <Text style={{ fontSize: 20, color: theme.text, textAlign: 'center', marginTop: 20 }}>
        "{quote}"
      </Text>

      <Text style={{ fontSize: 16, color: theme.accent, textAlign: 'center', marginTop: 10 }}>
        — {category.toUpperCase()}
      </Text>

      <TouchableOpacity onPress={loadQuoteOfTheDay}>
        <Text style={{ marginTop: 30, fontSize: 18, color: theme.accent, textAlign: 'center' }}>
          Refresh Quote
        </Text>
      </TouchableOpacity>

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
