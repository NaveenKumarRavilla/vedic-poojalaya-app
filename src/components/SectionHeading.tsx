import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';
export function SectionHeading({ title, subtitle, action, onAction }: { title: string; subtitle?: string; action?: string; onAction?: () => void }) {
  return <View style={s.row}><View style={{ flex: 1 }}><Text style={s.title}>{title}</Text>{subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}</View>{action ? <Pressable accessibilityRole="button" accessibilityLabel={action} onPress={onAction} style={s.actionButton}><Text style={s.action}>{action}  {'\u203a'}</Text></Pressable> : null}</View>;
}
const s = StyleSheet.create({ row: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }, title: { color: colors.ink, fontSize: typography.size.title, fontWeight: '600', letterSpacing: -0.35 }, subtitle: { color: colors.muted, fontSize: typography.size.sm, marginTop: 4 }, actionButton: { minHeight: 44, justifyContent: 'center', paddingLeft: spacing.sm }, action: { color: colors.maroon, fontSize: 13, fontWeight: '600' } });
