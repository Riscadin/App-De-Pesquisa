import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'captar.trabalhador.app',
  appName: 'captar_trabalhador_app',
  webDir: 'dist/www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
