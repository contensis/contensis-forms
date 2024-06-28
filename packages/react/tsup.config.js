import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: {
            ['contensis-forms']: 'src/index.ts'
        },
        format: ['esm', 'cjs'],
        sourcemap: true,
        clean: true
    }
]);
