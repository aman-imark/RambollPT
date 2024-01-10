import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ramboll.RambollPT',
  appName: 'HealthCity Novena: Patient Pilot',
  webDir: 'www',
  bundledWebRuntime: false,
  loggingBehavior: 'none',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      showSpinner: false,
      launchShowDuration: 3000,
      androidSplashResourceName: "splash"
    }
  }
};

export default config;
