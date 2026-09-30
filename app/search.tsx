import { useMemo, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ProductCard, SectionHeading } from '../src/components';
import { categories, products } from '../src/data/catalog';
import { useCartStore } from '../src/store/cartStore';
import { useWishlistStore } from '../src/store/wishlistStore';
import { colors, radius, spacing, typography } from '../src/theme';

const popularSearches = ['Kumkum', 'Pasupu', 'Camphor', 'Pooja kit', 'Ganesh idol'];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const { width } = useWindowDimensions();
  const cardWidth = (width - spacing.xl * 2 - spacing.md) / 2;
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return [];
    return products.filter((product) => {
      const category = categories.find((item) => item.id === product.categoryId)?.name ?? '';
      return `${product.name} ${product.description} ${product.weight} ${category}`.toLocaleLowerCase().includes(normalized);
    });
  }, [query]);
  const wishlistProducts = useWishlistStore((state) => state.products);
  const wishedIds = useMemo(() => wishlistProducts.map((product) => product.id), [wishlistProducts]);

  return <SafeAreaView style={s.safe}>
    <View style={s.header}>
      <Pressable onPress={() => router.back()} style={s.back} accessibilityLabel="Go back"><Feather name="arrow-left" size={21} color={colors.ink} /></Pressable>
      <Text style={s.heading}>Search</Text>
      <View style={{ width: 42 }} />
    </View>
    <View style={s.searchBox}>
      <Feather name="search" size={18} color={colors.muted} />
      <TextInput autoFocus value={query} onChangeText={setQuery} placeholder="Search kumkum, pooja kits, idols..." placeholderTextColor={colors.subtle} returnKeyType="search" style={s.input} accessibilityLabel="Search products" />
      {query.length > 0 && <Pressable onPress={() => setQuery('')} style={s.clear} accessibilityLabel="Clear search"><Feather name="x-circle" size={18} color={colors.muted} /></Pressable>}
    </View>
    {query.trim().length === 0 ? <View style={s.discover}>
      <SectionHeading title="Popular searches" subtitle="A few good places to start" />
      <View style={s.chips}>{popularSearches.map((term) => <Pressable key={term} onPress={() => setQuery(term)} style={s.chip}><Feather name="trending-up" size={13} color={colors.gold} /><Text style={s.chipText}>{term}</Text></Pressable>)}</View>
      <SectionHeading title="Browse categories" />
      <View style={s.categoryList}>{categories.slice(0, 6).map((category) => <Pressable key={category.id} style={s.categoryRow} onPress={() => router.push({ pathname: '/category/[id]', params: { id: category.id } })}><Text style={s.categoryName}>{category.name}</Text><Feather name="arrow-up-right" size={16} color={colors.subtle} /></Pressable>)}</View>
    </View> : results.length > 0 ? <FlatList data={results} numColumns={2} keyExtractor={(item) => item.id} columnWrapperStyle={s.productRow} contentContainerStyle={s.results} showsVerticalScrollIndicator={false} ListHeaderComponent={<Text style={s.resultCount}>{results.length} {results.length === 1 ? 'product' : 'products'} found</Text>} renderItem={({ item }) => <ProductCard width={cardWidth} product={item} wished={wishedIds.includes(item.id)} onPress={() => router.push(`/product/${item.id}`)} onAdd={() => useCartStore.getState().addItem(item)} onWishlist={() => useWishlistStore.getState().toggle(item)} />} /> : <View style={s.empty}><Feather name="search" size={26} color={colors.gold} /><Text style={s.emptyTitle}>No matches yet</Text><Text style={s.emptyCopy}>Try a different name, such as kumkum, camphor or pooja kit.</Text></View>}
  </SafeAreaView>;
}

const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.cream }, header: { height: 54, paddingHorizontal: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, back: { width: 42, height: 42, justifyContent: 'center' }, heading: { color: colors.ink, fontSize: typography.size.md, fontWeight: '600' }, searchBox: { marginHorizontal: spacing.xl, height: 50, borderRadius: radius.md, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.paper, flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, gap: 10 }, input: { flex: 1, color: colors.ink, fontSize: 13 }, clear: { width: 32, alignItems: 'flex-end' }, discover: { padding: spacing.xl, paddingTop: spacing.xxl }, chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginBottom: spacing.xxl }, chip: { height: 38, paddingHorizontal: 12, gap: 7, borderRadius: radius.pill, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.paper, borderWidth: 1, borderColor: colors.line }, chipText: { color: colors.ink, fontSize: 12, fontWeight: '500' }, categoryList: { marginTop: -spacing.sm }, categoryRow: { height: 48, borderBottomWidth: 1, borderColor: colors.line, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, categoryName: { color: colors.ink, fontSize: 13 }, results: { paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.xl }, resultCount: { color: colors.muted, fontSize: 12, marginBottom: spacing.md }, productRow: { justifyContent: 'space-between', marginBottom: spacing.xl }, empty: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: spacing.xxl }, emptyTitle: { fontSize: 19, fontWeight: '600', color: colors.ink, marginTop: spacing.md }, emptyCopy: { fontSize: 13, lineHeight: 20, textAlign: 'center', color: colors.muted, marginTop: spacing.xs } });
