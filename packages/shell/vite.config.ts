import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const isCapBuild = process.env.CAP_BUILD != null;

const remoteBase = isCapBuild
  ? {
      account: 'account/remoteEntry.js',
      checkout: 'checkout/remoteEntry.js',
      helpinfo: 'helpinfo/remoteEntry.js',
    }
  : {
      account: 'http://localhost:3004/remoteEntry.js',
      checkout: 'http://localhost:3005/remoteEntry.js',
      helpinfo: 'http://localhost:3006/remoteEntry.js',
    };

export default defineConfig({
  base: isCapBuild ? './' : '/',
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        account: {
          external: remoteBase.account,
          from: 'webpack',
          format: 'var',
        },
        checkout: {
          external: remoteBase.checkout,
          from: 'webpack',
          format: 'var',
        },
        helpinfo: {
          external: remoteBase.helpinfo,
          from: 'webpack',
          format: 'var',
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@ionic/react': { singleton: true },
        '@capacitor/core': { singleton: true },
        'provider-lib': { singleton: true },
      },
    }),
  ],
  build: {
    outDir: 'build',
    target: 'esnext',
  },
});
