const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const nextConfig = {
  env: {
    API_KEY: '97a5b47428f2d1e11f42317d0ce3c263',
    API_URL: 'https://api.themoviedb.org/3',
  },
  webpack(config, { isServer, dev }) {
    if (!dev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: path.join(
            __dirname,
            '.report',
            isServer ? 'server-report.html' : 'client-report.html',
          ),
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
