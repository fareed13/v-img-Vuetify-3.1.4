// https://nuxt.com/docs/api/configuration/nuxt-config
// import netlifyEnv from './netlify-env';
// nuxt.config.ts

// import { defineNuxtConfig } from 'nuxt'
// import _custom from '@/aqua-static/assets'
export default defineNuxtConfig({
    // typescript: {
    //   strict: true
    // },
//     runtimeConfig: {
//       public: {
//           ...netlifyEnv,
//       }
//   },
    css: ['vuetify/lib/styles/main.sass'],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },

    // modules: [
    //   '@pinia/nuxt',
    // ],
    
  
    // axios: {
    //   baseURL: 'https://django-backend.abbi.ai'
    // },

})
