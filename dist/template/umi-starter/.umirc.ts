import { defineConfig } from 'umi';

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
  mfsu: {},
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
});
