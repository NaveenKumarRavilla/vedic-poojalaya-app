import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors, radius, spacing } from '../theme';
export function SearchField({ onPress }: { onPress?: () => void }) {
 return <Pressable onPress={onPress} style={s.wrap} accessibilityRole="button" accessibilityLabel="Search products"><Feather name="search" size={18} color={colors.muted} /><TextInput editable={false} pointerEvents="none" placeholder="Search kumkum, pooja kits, idols..." placeholderTextColor={colors.subtle} style={s.input} /><Feather name="arrow-right" size={17} color={colors.maroon} /></Pressable>;
}
const s = StyleSheet.create({ wrap: { height: 50, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, backgroundColor: colors.paper, flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, gap: 10 }, input: { flex: 1, color: colors.ink, fontSize: 13, paddingVertical: 0 } });
