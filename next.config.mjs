// This configuration uses JSDoc comments for type support in JavaScript. Ensure your development
// environment supports such comments if you're not using TypeScript directly.

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'cf.shopee.co.th',
            'cdn.dummyjson.com'
        ], // Add your image domain here
    },
};

export default nextConfig;
