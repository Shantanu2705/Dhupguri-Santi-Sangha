import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dhupgurisantisangha.org';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/history',
    '/activities',
    '/gallery',
    '/committee',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

