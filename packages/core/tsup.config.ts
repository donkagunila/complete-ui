import {defineConfig, Options} from 'tsup'

export default defineConfig((options: Options) => ({
    treeshake: true,
    entry: ['./**/*.tsx'],
    format: ['esm', 'cjs'],
    target: 'esnext',
    dts: true,
    minify: true,
    external: ["react", 'react-dom'],
    splitting: false,
    sourcemap: true,
    clean: true,
    ...options
}));