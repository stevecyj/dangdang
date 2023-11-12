import { defineConfig, CommonServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig((mode) => {
  const envFileName: string = ".env";
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;
  console.log("curEnvFileName", curEnvFileName);

  let server: CommonServerOptions = {};
  if (mode.mode === "dev") {
    server = {
      // host: "192.168.2.6",
      port: 5005,
      proxy: {
        '/dang': {
          target: "http://192.168.2.6:5003",
        },
      },
    };
    console.log("dev mode", server);
  } else if (mode.mode === "prod") {
    console.log("prod mode");
  }

  return {
    plugins: [vue()],
    server,
  };
});
