import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/lib.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.lib.json",
      declaration: true,
      declarationDir: "dist",
      exclude: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "src/App.tsx",
        "src/index.tsx",
        "src/reportWebVitals.ts",
        "src/setupTests.ts",
      ],
    }),
    postcss({
      extract: false,
      inject: true,
      minimize: true,
    }),
  ],
  external: ["react", "react-dom"],
};
