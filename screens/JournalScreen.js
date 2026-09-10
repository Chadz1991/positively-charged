import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../theme/SeasonalThemes';

export default function JournalScreen() {
  const theme = themes.autumn;
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await AsyncStorage.getItem('journalEntries');
    if (data) {
      setSavedEntries(JSON.parse(data));
    }
  };

  const saveEntry = async () => {
    if (!entry.trim()) return;

    const newEntry = {
      id: Date.now(),
      text: entry,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...savedEntries, newEntry];
    setSavedEntries(updated);
    await AsyncStorage.setItem('journalEntries', JSON.stringify(updated));
    setEntry('');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.text }}>
        Today's Reflection
      </Text>

      <TextInput
        multiline
        placeholder="Write your thoughts..."
        value={entry}
        onChangeText={setEntry}
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          minHeight: 150
        }}
      />

      <TouchableOpacity onPress={saveEntry}>
        <Text style={{ marginTop: 20, fontSize: 20, color: theme.accent }}>
          Save Entry
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 40, fontSize: 24, fontWeight: 'bold', color: theme.text }}>
        Previous Entries
      </Text>

      {savedEntries.map((item) => (
        <View key={item.id} style={{ marginTop: 20, backgroundColor: '#fff', padding: 15, borderRadius: 10 }}>
          <Text style={{ fontSize: 16, color: theme.text }}>{item.date}</Text>
          <Text style={{ marginTop: 10, fontSize: 18 }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
