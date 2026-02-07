/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compress: true,
    experimental: {
        optimizeCss: true,
    },
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        domains: [
            'upload.wikimedia.org'
        ],
    },
};

export default nextConfig;
