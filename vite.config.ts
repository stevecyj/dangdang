import { defineConfig, type CommonServerOptions } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import { resolve } from 'path';
import dotenv, { type DotenvParseOutput } from 'dotenv';

/**
 * @description: 从当前文件路径解析出项目根路径
 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};
const alias: Record<string, string> = {
  '@': pathResolve('./src')
};
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
    resolve: { alias },
    server
  };
});
