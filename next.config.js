/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    backend: "http://api.arzhaan.rtyva.ru",
    token: "71be1aaf5ace93be7fe6932cfcfd549f06acc172b3d2b237f11733b87719a28eec79af964f466d72f0c1b57b771ec087bff2660e76bf87a8593674152e95b4171f607c96acf233dc9e2e22faa877ea7e9b9bc67c8eb2e6264d30e859934ac8195cb38d2a7d61e9bb2c65da5bc9438204198345377aef18a22175be9f97231511"
  },

  compress: true,
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = nextConfig
