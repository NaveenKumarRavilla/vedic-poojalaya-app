import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useMemo } from 'react';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { CategoryTile, ProductCard, SearchField, SectionHeading } from '../../src/components';
import { categories, products } from '../../src/data/catalog';
import { colors, spacing, typography } from '../../src/theme';
import { useCartStore } from '../../src/store/cartStore';
import { useWishlistStore } from '../../src/store/wishlistStore';

export default function CategoriesScreen() {
 const { width } = useWindowDimensions();
 const productWidth = (width - spacing.xl * 2 - spacing.md) / 2;
 const wishlistProducts = useWishlistStore(state => state.products);
 const wishedIds = useMemo(() => wishlistProducts.map(product => product.id), [wishlistProducts]);
 return <SafeAreaView style={s.safe}><FlatList data={products} numColumns={2} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} contentContainerStyle={s.content} columnWrapperStyle={s.products} ListHeaderComponent={<>
   <View style={s.header}><View><Text style={s.kicker}>DISCOVER SOMETHING SACRED</Text><Text style={s.title}>Explore categories</Text></View><Pressable onPress={() => router.push('/search')} style={s.searchIcon} accessibilityRole="button" accessibilityLabel="Search"><Feather name="search" size={19} color={colors.ink} /></Pressable></View>
   <SearchField onPress={() => router.push('/search')} />
   <View style={s.categorySection}><SectionHeading title="Shop by category" subtitle="Everyday essentials for your rituals" /><View style={s.grid}>{categories.map(c => <View key={c.id} style={s.tile}><CategoryTile category={c} size={72} onPress={() => router.push({ pathname: '/category/[id]', params: { id: c.id } })} /></View>)}</View></View>
   <View style={s.productsHeading}><SectionHeading title="Popular essentials" subtitle="A few favourites to begin with" /></View>
 </>} renderItem={({ item }) => <ProductCard width={productWidth} product={item} onPress={() => router.push(`/product/${item.id}`)} onAdd={() => useCartStore.getState().addItem(item)} onWishlist={() => useWishlistStore.getState().toggle(item)} wished={wishedIds.includes(item.id)} />} />
 </SafeAreaView>;
}
const s = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.cream }, content: { paddingHorizontal: spacing.xl, paddingTop: 14, paddingBottom: 30 }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }, kicker: { fontSize: 9, letterSpacing: 1.4, fontWeight: '700', color: colors.gold, marginBottom: 6 }, title: { color: colors.ink, fontSize: typography.size.heading, letterSpacing: -.6, fontWeight: '600' }, searchIcon: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.line }, categorySection: { marginTop: 27 }, grid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 21 }, tile: { width: '25%', alignItems: 'center' }, productsHeading: { marginTop: 32 }, products: { justifyContent: 'space-between', marginBottom: 22 } });
