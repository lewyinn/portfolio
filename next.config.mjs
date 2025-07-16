/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    experimental: {
        optimizeCss: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
            'upload.wikimedia.org'
        ],
    },
};

export default nextConfig;
