export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  content: {
    highlight: {
      preload: ['css', 'scss', 'js', 'ts', 'c#', 'vue']
    }
  }
})
