import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: "/js-homework-vite/",
  root: "src",
  build: {
    rollupOptions: {
      //! ✅ Це шукає ВСІ HTML-файли, включаючи HTML-файли нижнього рівня
      input: glob.sync("./src/**/*.html"),
    },
    outDir: "../dist",
  },

  plugins: [injectHTML(), FullReload(["./src/**/*.html"])],
});
