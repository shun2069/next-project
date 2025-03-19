/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.microcms-assets.io',
        },
      ],
    },
    env: {
      MICROCMS_SERVICE_DOMAIN: "damd6dwlx0",
      MICROCMS_API_KEY: "GQXoXaw7g9K5GGggQB5YRY1eFJTtxUTpo3Fv",
    },
  };
  
  export default nextConfig;
  