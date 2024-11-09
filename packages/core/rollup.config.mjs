import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";


export default {
  input: "src/index.ts",  // Adjust based on your entry file
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: "index.css",  // Extract CSS into separate files
      minimize: true,  // Minify CSS
      sourceMap: true,
    }),
  ],
  external: ["react", "react-dom", "tailwind-merge"],  // Avoid bundling React and ReactDOM
};
