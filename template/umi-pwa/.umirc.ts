import { defineConfig } from 'umi';
import { InjectManifest } from 'workbox-webpack-plugin';

export default defineConfig({
  hash: true,
  webpack5: {},
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/layout/index',
    },
  ],
  title: '{{ @ti.inject="name" }}',
  fastRefresh: {},
  dynamicImport: {},
  // mfsu: {},
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
  copy: ['/src/pwa/manifest.webmanifest'],
  links: [{ rel: 'manifest', href: '/manifest.webmanifest' }],
  chainWebpack: (config: any) => {
    config.plugin('workbox').use(InjectManifest, [
      {
        swSrc: './src/pwa/service-worker.ts',
        swDest: 'service-worker.js',
        exclude: [/\.map$/, /favicon\.ico$/, /^manifest.*\.js?$/],
      },
    ]);
  },
});
