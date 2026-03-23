import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'array',
      label: 'Header Navigation',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        {
          name: 'children',
          type: 'array',
          label: 'Dropdown Items',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'array',
      label: 'Footer Navigation',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
