const pexels = (id: number, width = 800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
const unsplash = (id: string, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
// Curated sample photography. Replace these entries with approved merchant product photography before launch.
export const images = {
  hero: pexels(4094848, 1400),
  puja: pexels(35407778),
  diya: pexels(6176512),
  flowers: unsplash('photo-1490750967868-88aa4486c946'),
  kumkum: pexels(35407778),
  turmeric: pexels(15623115),
  incense: pexels(7351728),
  brass: pexels(6176512),
  idol: pexels(33289447),
  deityPhoto: pexels(5363009),
  mala: pexels(34715513),
  kit: pexels(7685644),
  book: unsplash('photo-1544947950-fa07a98d237f'),
  kalash: pexels(7685507),
  wicks: pexels(6176512),
  dhoop: pexels(3626470),
};
