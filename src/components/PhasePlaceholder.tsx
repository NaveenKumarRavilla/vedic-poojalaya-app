import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';
export function PhasePlaceholder({ title, icon, message }: { title: string; icon: keyof typeof Feather.glyphMap; message: string }) {
 return <SafeAreaView style={s.safe}><View style={s.content}><View style={s.icon}><Feather name={icon} size={26} color={colors.maroon} /></View><Text style={s.title}>{title}</Text><Text style={s.message}>{message}</Text></View></SafeAreaView>;
}
const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.cream }, content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xxl }, icon: { width: 68, height: 68, borderRadius: radius.lg, backgroundColor: colors.iconSurface, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg }, title: { color: colors.ink, fontSize: 21, fontWeight: '600' }, message: { color: colors.muted, textAlign: 'center', fontSize: 13, lineHeight: 20, marginTop: 9, maxWidth: 270 } });
