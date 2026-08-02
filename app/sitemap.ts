import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://feasibility.earth', lastModified: new Date('2026-08-01'), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://feasibility.earth/how-it-works', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://feasibility.earth/pricing', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://feasibility.earth/open-call', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://feasibility.earth/methodology', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://feasibility.earth/use-cases', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://feasibility.earth/contact', lastModified: new Date('2026-08-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://feasibility.earth/faq', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://feasibility.earth/why-not-a-consultancy', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://feasibility.earth/insights', lastModified: new Date('2026-08-01'), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://feasibility.earth/insights/why-carbon-projects-fail-feasibility', lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://feasibility.earth/insights/carbon-feasibility-study-cost', lastModified: new Date('2026-05-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://feasibility.earth/insights/additionality-failure-carbon-projects', lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://feasibility.earth/insights/verra-vcs-vs-gold-standard-plan-vivo', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://feasibility.earth/insights/satellite-data-carbon-project-assessment', lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
