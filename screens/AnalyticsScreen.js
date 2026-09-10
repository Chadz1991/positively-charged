import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { themes } from '../theme/SeasonalThemes';
import { getAnalytics } from '../analytics/AnalyticsManager';
import { getSeason } from '../utils/getSeason';

export default function AnalyticsScreen() {
  const season = getSeason();
  const theme = themes[season];

  const [data, setData] = useState({});

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    const analytics = await getAnalytics();
    setData(analytics);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: theme.text }}>
        Analytics
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.text }}>
        Total Journal Entries: {data.journal_total || 0}
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.text }}>
        Total Quote Refreshes: {data.quote_refresh_total || 0}
      </Text>

      <Text style={{ marginTop: 20, fontSize: 20, color: theme.text }}>
        Notifications Delivered: {data.notification_total || 0}
      </Text>

      <Text style={{ marginTop: 30, fontSize: 24, fontWeight: 'bold', color: theme.text }}>
        Category Usage
      </Text>

      {Object.keys(data)
        .filter(key => key.startsWith('category_'))
        .map(key => (
          <Text key={key} style={{ marginTop: 10, fontSize: 18, color: theme.accent }}>
            {key.replace('category_', '')}: {data[key]}
          </Text>
        ))}
    </ScrollView>
  );
}
