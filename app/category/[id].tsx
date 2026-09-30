import { useMemo } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ProductCard } from '../../src/components';
import { categories, products } from '../../src/data/catalog';
import { useCartStore } from '../../src/store/cartStore';
import { useWishlistStore } from '../../src/store/wishlistStore';
import { colors, spacing, typography } from '../../src/theme';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const category = categories.find((item) => item.id === id);
  const listing = useMemo(() => products.filter((product) => product.categoryId === id), [id]);
  const { width } = useWindowDimensions();
  const cardWidth = (width - spacing.xl * 2 - spacing.md) / 2;
  const wishlistProducts = useWishlistStore((state) => state.products);
  const wishedIds = useMemo(() => wishlistProducts.map((product) => product.id), [wishlistProducts]);

  return <SafeAreaView style={s.safe}>
    <View style={s.header}><Pressable onPress={() => router.back()} style={s.back} accessibilityLabel="Go back"><Feather name="arrow-left" size={21} color={colors.ink} /></Pressable><Text numberOfLines={1} style={s.title}>{category?.name ?? 'Category'}</Text><Pressable onPress={() => router.push('/search')} style={s.back} accessibilityLabel="Search"><Feather name="search" size={20} color={colors.ink} /></Pressable></View>
    <FlatList data={listing} numColumns={2} keyExtractor={(item) => item.id} columnWrapperStyle={s.row} contentContainerStyle={s.list} showsVerticalScrollIndicator={false} ListHeaderComponent={<View style={s.subhead}><Text style={s.subtitle}>{category ? `Shop ${category.name.toLocaleLowerCase()} for your daily rituals` : 'Explore our pooja essentials'}</Text><Text style={s.count}>{listing.length} products</Text></View>} ListEmptyComponent={<View style={s.empty}><Feather name="package" size={25} color={colors.gold} /><Text style={s.emptyTitle}>More products coming soon</Text><Text style={s.subtitle}>We’re adding thoughtful picks to this collection.</Text></View>} renderItem={({ item }) => <ProductCard width={cardWidth} product={item} wished={wishedIds.includes(item.id)} onPress={() => router.push(`/product/${item.id}`)} onAdd={() => useCartStore.getState().addItem(item)} onWishlist={() => useWishlistStore.getState().toggle(item)} />} />
  </SafeAreaView>;
}
const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.cream }, header: { height: 56, paddingHorizontal: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, back: { width: 42, height: 42, justifyContent: 'center' }, title: { flex: 1, textAlign: 'center', color: colors.ink, fontSize: typography.size.md, fontWeight: '600' }, list: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xl }, subhead: { paddingTop: spacing.sm, paddingBottom: spacing.lg }, subtitle: { color: colors.muted, fontSize: 12, lineHeight: 18 }, count: { color: colors.subtle, fontSize: 11, marginTop: 6 }, row: { justifyContent: 'space-between', marginBottom: spacing.xl }, empty: { alignItems: 'center', paddingTop: 80 }, emptyTitle: { color: colors.ink, fontSize: 17, fontWeight: '600', marginTop: spacing.md } });
