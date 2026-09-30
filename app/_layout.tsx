import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { colors } from '../src/theme';

export default function RootLayout() {
 const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, retry: 1 } } }));
 return <QueryClientProvider client={queryClient}><StatusBar style="dark" /><Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.cream }, animation: 'slide_from_right' }}><Stack.Screen name="(tabs)" /><Stack.Screen name="product/[id]" /><Stack.Screen name="category/[id]" /><Stack.Screen name="search" /><Stack.Screen name="cart/index" /></Stack></QueryClientProvider>;
}
