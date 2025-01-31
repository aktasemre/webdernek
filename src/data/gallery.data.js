const galleryData = {
  photos: [
    {
      id: 1,
      title: 'Köy Manzarası',
      description: 'Köyümüzün genel görünümü',
      image: '/images/gallery/village1.jpg',
      category: 'landscape',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Köy Meydanı',
      description: 'Köy meydanından bir görünüm',
      image: '/images/gallery/square1.jpg',
      category: 'places',
      date: '2024-01-20',
    },
  ],
  categories: [
    { id: 'landscape', name: 'Manzaralar' },
    { id: 'places', name: 'Mekanlar' },
    { id: 'events', name: 'Etkinlikler' },
    { id: 'people', name: 'İnsanlar' },
  ],
};

export default galleryData; 