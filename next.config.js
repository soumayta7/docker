const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  output: 'standalone',
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["rchin-app-l5wgm.ondigitalocean.app", "localhost"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
