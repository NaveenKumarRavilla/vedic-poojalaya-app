import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { Category } from '../types/catalog';
import { colors, radius, spacing } from '../theme';
export function CategoryTile({ category, onPress, size = 92 }: { category: Category; onPress?: () => void; size?: number }) {
 return <Pressable onPress={onPress} style={({ pressed }) => [s.wrap, { width: size }, pressed && { opacity: .86, transform: [{ scale: .98 }] }]} accessibilityRole="button" accessibilityLabel={`Shop ${category.name}`}><Image source={{ uri: category.image }} style={{ width: size, height: size, borderRadius: radius.md, backgroundColor: colors.surface }} resizeMode="cover" /><Text numberOfLines={2} style={s.label}>{category.name}</Text></Pressable>;
}
const s = StyleSheet.create({ wrap: { marginRight: spacing.md, alignItems: 'center' }, label: { color: colors.ink, fontSize: 12, lineHeight: 16, textAlign: 'center', marginTop: 8, fontWeight: '500' } });
