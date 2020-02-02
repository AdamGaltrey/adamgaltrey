const path = require('path');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withSass({
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        config.resolve.alias['~'] = path.resolve(__dirname);

        return config
    }
}));
