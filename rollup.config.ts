import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "./src/main.ts",
  output: {
    format: "cjs",
    file: "./dist/index.cjs",
  },
  plugins: [nodeResolve(), typescript()],
  external: ["@actions/core"] 
});
