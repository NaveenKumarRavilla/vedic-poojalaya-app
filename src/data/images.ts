const photo = (id: string, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
// Sample catalog photography. Replace each URL with the merchant's approved product asset when available.
export const images = {
  hero: photo('photo-1603006905003-be475563bc59', 1400),
  puja: photo('photo-1604608672516-f1b66c3f81c4'),
  diya: photo('photo-1606293926075-69a00dbfde81'),
  flowers: photo('photo-1490750967868-88aa4486c946'),
  kumkum: photo('photo-1602874801007-bd458bb1b8b6'),
  turmeric: photo('photo-1615485500704-8e990f9900f4'),
  incense: photo('photo-1603006905003-be475563bc59'),
  brass: photo('photo-1606293926075-69a00dbfde81'),
  idol: photo('photo-1577083552431-6e5fd01aa342'),
  mala: photo('photo-1609766418204-94aae0ecf2b4'),
  kit: photo('photo-1604608672516-f1b66c3f81c4'),
  kalash: photo('photo-1615485500704-8e990f9900f4'),
  wicks: photo('photo-1519689680058-324335c77eba'),
  dhoop: photo('photo-1603006905003-be475563bc59'),
};
