const { withGluestackUI } = require("@gluestack/ui-next-adapter");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["nativewind", "react-native-css-interop"],
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = withGluestackUI(config);
