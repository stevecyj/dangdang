import { defineConfig, type CommonServerOptions } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import dotenv, { type DotenvParseOutput } from 'dotenv';

// https://vitejs.dev/config/

export default defineConfig((mode) => {
  const envFileName: string = '.env';
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;
  console.log('curEnvFileName', curEnvFileName);

  let server: CommonServerOptions = {};
  const envData = fs.readFileSync(curEnvFileName);
  const envMap: DotenvParseOutput = dotenv.parse(envData);
  console.log('envMap', envMap);

  if (mode.mode === 'dev') {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
      proxy: {
        '/dang': {
          target: 'http://192.168.2.6:5003'
        }
      }
    };
    console.log('dev mode', server);
  } else if (mode.mode === 'prod') {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT
    };
    console.log('prod mode');
  }

  return {
    plugins: [vue()],
    server
  };
});
