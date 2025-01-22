export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arslandede.netlify.app';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/about/history`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/about/board`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/about/village`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/donation`,
      lastModified: new Date('2024-02-20'),
    },
  ];
} 