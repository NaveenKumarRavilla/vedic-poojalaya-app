import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Product } from '../types/catalog';
import { colors, radius } from '../theme';
export function ProductCard({ product, onPress, onAdd, wished = false, onWishlist, width = 164 }: { product: Product; onPress?: () => void; onAdd?: () => void; wished?: boolean; onWishlist?: () => void; width?: number }) {
 const [added, setAdded] = useState(false);
 const handleAdd = () => {
  onAdd?.();
  setAdded(true);
  setTimeout(() => setAdded(false), 1100);
 };
 return <Pressable onPress={onPress} style={({ pressed }) => [s.card, { width }, pressed && { opacity: .94 }]} accessibilityRole="button" accessibilityLabel={`Open ${product.name}`}>
  <View style={[s.imageWrap, { width, height: width }]}><Image source={{ uri: product.images[0] }} style={s.image} resizeMode="cover" />{product.discount > 0 && <View style={s.badge}><Text style={s.badgeText}>{product.discount}% OFF</Text></View>}<Pressable onPress={(event) => { event.stopPropagation(); onWishlist?.(); }} accessibilityRole="button" accessibilityLabel={wished ? 'Remove from wishlist' : 'Add to wishlist'} style={s.heart}><Feather name="heart" size={17} color={wished ? colors.maroon : colors.ink} /></Pressable></View>
  <Text numberOfLines={1} style={s.name}>{product.name}</Text><Text style={s.weight}>{product.weight}</Text><View style={s.rating}><Feather name="star" size={12} color={colors.gold} /><Text style={s.ratingText}>{product.rating.toFixed(1)} <Text style={s.reviews}>({product.reviewCount})</Text></Text></View>
  <View style={s.priceRow}><Text style={s.price}>₹{product.sellingPrice}</Text><Text style={s.mrp}>₹{product.mrp}</Text></View>
  {product.stock > 0 ? <Pressable onPress={(event) => { event.stopPropagation(); handleAdd(); }} style={({ pressed }) => [s.add, added && s.added, pressed && s.addPressed]} accessibilityRole="button" accessibilityLabel={added ? 'Added to cart' : 'Add to cart'}><Text style={s.addText}>{added ? 'ADDED' : 'ADD'}</Text><Feather name={added ? 'check' : 'plus'} size={15} color={colors.maroon} /></Pressable> : <Text style={s.out}>Out of Stock</Text>}
 </Pressable>;
}
const s = StyleSheet.create({ card: { paddingBottom: 2 }, imageWrap: { position: 'relative', borderRadius: radius.md, backgroundColor: colors.surface, overflow: 'hidden' }, image: { width: '100%', height: '100%' }, badge: { position: 'absolute', top: 9, left: 9, backgroundColor: colors.maroon, borderRadius: 5, paddingHorizontal: 7, paddingVertical: 4 }, badgeText: { color: colors.white, fontSize: 9, fontWeight: '700', letterSpacing: .3 }, heart: { position: 'absolute', top: 8, right: 8, width: 32, height: 32, borderRadius: 16, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center' }, name: { color: colors.ink, fontSize: 14, fontWeight: '600', marginTop: 10 }, weight: { color: colors.muted, fontSize: 11, marginTop: 3 }, rating: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6 }, ratingText: { color: colors.ink, fontSize: 11, fontWeight: '600' }, reviews: { color: colors.subtle, fontWeight: '400' }, priceRow: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 7 }, price: { color: colors.ink, fontSize: 16, fontWeight: '700' }, mrp: { color: colors.subtle, textDecorationLine: 'line-through', fontSize: 11 }, add: { marginTop: 9, height: 36, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.maroon, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center' }, added: { backgroundColor: colors.positiveSurface, borderColor: colors.green }, addPressed: { backgroundColor: colors.pressedSurface, transform: [{ scale: .98 }] }, addText: { fontSize: 11, color: colors.maroon, fontWeight: '700', letterSpacing: .6 }, out: { color: colors.red, fontSize: 12, marginTop: 13 } });
