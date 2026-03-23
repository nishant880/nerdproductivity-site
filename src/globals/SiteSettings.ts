import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      defaultValue: 'Nerd Productivity',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      defaultValue: 'Productivity, AI & Business Growth for Business Owners and Executives',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'twitter', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
    {
      name: 'defaultSEO',
      type: 'group',
      label: 'Default SEO',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'ga4MeasurementId',
      type: 'text',
      admin: {
        description: 'Google Analytics 4 Measurement ID (e.g. G-XXXXXXXX)',
      },
    },
  ],
}
