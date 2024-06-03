// https://nuxt.com/docs/api/configuration/nuxt-config

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: join(currentDir, './presets/wind/') as string },
    components: {
      prefix: 'P',
    },
  },
  css: [
    'primeicons/primeicons.css',
  ],
})
