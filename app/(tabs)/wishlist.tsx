import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ProductCard } from '../../src/components';
import { useCartStore } from '../../src/store/cartStore';
import { useWishlistStore } from '../../src/store/wishlistStore';
import { colors, spacing, typography } from '../../src/theme';

export default function WishlistScreen() {
  const items = useWishlistStore((state) => state.products);
  const toggle = useWishlistStore((state) => state.toggle);
  const { width } = useWindowDimensions();
  const cardWidth = (width - spacing.xl * 2 - spacing.md) / 2;

  return <SafeAreaView style={s.safe}>
    <View style={s.header}><Text style={s.title}>Your wishlist</Text><Text style={s.count}>{items.length} saved</Text></View>
    {items.length > 0 ? <FlatList data={items} numColumns={2} keyExtractor={(item) => item.id} columnWrapperStyle={s.row} contentContainerStyle={s.list} showsVerticalScrollIndicator={false} renderItem={({ item }) => <ProductCard width={cardWidth} product={item} wished onPress={() => router.push(`/product/${item.id}`)} onAdd={() => useCartStore.getState().addItem(item)} onWishlist={() => toggle(item)} />} /> : <View style={s.empty}><View style={s.icon}><Feather name="heart" size={26} color={colors.maroon} /></View><Text style={s.emptyTitle}>Keep your favourites close.</Text><Text style={s.copy}>Tap the heart on anything you’d like to save for later.</Text><Pressable style={s.button} onPress={() => router.push('/(tabs)/categories')}><Text style={s.buttonText}>Explore products</Text></Pressable></View>}
  </SafeAreaView>;
}

const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.cream }, header: { height: 62, paddingHorizontal: spacing.xl, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }, title: { color: colors.ink, fontSize: typography.size.heading, fontWeight: '600' }, count: { color: colors.muted, fontSize: 12 }, list: { paddingHorizontal: spacing.xl, paddingTop: spacing.sm, paddingBottom: spacing.xl }, row: { justifyContent: 'space-between', marginBottom: spacing.xl }, empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xxl }, icon: { height: 68, width: 68, borderRadius: 24, backgroundColor: colors.warmSand, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg }, emptyTitle: { color: colors.ink, fontSize: 18, fontWeight: '600' }, copy: { color: colors.muted, fontSize: 13, textAlign: 'center', lineHeight: 20, marginTop: spacing.xs }, button: { height: 46, marginTop: spacing.xl, paddingHorizontal: spacing.xl, backgroundColor: colors.maroon, borderRadius: 12, justifyContent: 'center' }, buttonText: { color: colors.white, fontWeight: '600', fontSize: 13 } });
