import {defineConfig, Options} from 'tsup'

export default defineConfig((options : Options) => ({
    treeshake: true,
    entry: ['./**/*.tsx'],
    format: ["esm"],
    dts: true,
    minify: true,
    external: ["react"],
    splitting: false,
    sourcemap: true,
    clean: true,
    ...options
}));