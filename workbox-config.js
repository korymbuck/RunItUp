module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.{html,js,css,png,jpg}"],
  swDest: "sw.js",
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
    },
    {
      urlPattern: ({ url }) => url.pathname.match(/\.(png|jpg|jpeg|svg)$/),
      handler: "CacheFirst",
    },
  ],
};