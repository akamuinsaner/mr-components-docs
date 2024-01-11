/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        urlImports: ['https://esm.sh/'],
        esmExternals: 'loose'
    },
}

module.exports = nextConfig
