import { Link, Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../src/theme';

export default function NotFoundScreen() {
 return <><Stack.Screen options={{ title: 'Page not found' }} /><View style={s.page}><View style={s.icon}><Feather name="compass" size={27} color={colors.maroon} /></View><Text style={s.title}>We couldn’t find that page.</Text><Text style={s.copy}>Let’s take you back to the pooja essentials.</Text><Link href="/(tabs)" style={s.link}>Back to home</Link></View></>;
}
const s = StyleSheet.create({ page: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xxl, backgroundColor: colors.cream }, icon: { height: 66, width: 66, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.warmSand, marginBottom: spacing.lg }, title: { color: colors.ink, fontSize: 20, fontWeight: '600' }, copy: { color: colors.muted, fontSize: 13, marginTop: 8, textAlign: 'center' }, link: { marginTop: spacing.xl, color: colors.maroon, fontWeight: '600' } });
