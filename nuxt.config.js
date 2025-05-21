//   devtools: { enabled: true }
export default defineNuxtConfig({
  ssr: true,
  compatibility: {
    compatibilityDate: "2025-05-05",
  },
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/pp-neue-montreal", // Replace with the actual CDN link
      },
    ],
  },
});
