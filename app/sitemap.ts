import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bestcabservice.com'

    // Define your routes here
    const routes = [
        '',
        '/features',
        '/booking', // Anchor links usually, but if meaningful pages exists
    ]

    const locales = ['en', 'kn']

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            })
        })
    })

    return sitemapEntries
}
