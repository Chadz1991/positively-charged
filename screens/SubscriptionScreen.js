import { View, Text, TouchableOpacity } from 'react-native';
import { themes } from '../theme/SeasonalThemes';

export default function SubscriptionScreen() {
  const theme = themes.autumn;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 30 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: theme.text, textAlign: 'center' }}>
        Positively Charged+
      </Text>

      <Text style={{ marginTop: 20, fontSize: 18, color: theme.text, textAlign: 'center' }}>
        Unlock unlimited quotes, reflections, seasonal themes, and analytics.
      </Text>

      <View style={{ marginTop: 40, backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.text }}>
          7‑Day Free Trial
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: theme.text }}>
          Try everything free for a full week.
        </Text>
      </View>

      <View style={{ marginTop: 20, backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.text }}>
          £2.99 / month
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: theme.text }}>
          Cancel anytime. Full access.
        </Text>
      </View>

      <View style={{ marginTop: 20, backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.text }}>
          £29.99 / year
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: theme.text }}>
          Save 15% with annual billing.
        </Text>
      </View>

      <TouchableOpacity style={{ marginTop: 40, backgroundColor: theme.accent, padding: 15, borderRadius: 10 }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
          Start Free Trial
        </Text>
      </TouchableOpacity>
    </View>
  );
}
