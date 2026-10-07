/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Site photography only changes with a deploy, so keep optimised variants
    // cached for 31 days instead of the 4-hour default.
    minimumCacheTTL: 2678400,
  },
};

module.exports = nextConfig;
