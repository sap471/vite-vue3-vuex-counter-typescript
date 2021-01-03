import { UserConfig } from "vite";

const config: UserConfig = {
  hmr: {
    hostname: "env.htdocs.my.id",
    path: "/hmr",
    port: 443,
  },
  port: 5000,
};

export default config;
