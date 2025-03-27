import { withFaust } from '@faustwp/core';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withFaust(nextConfig);
