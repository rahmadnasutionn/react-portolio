import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.tsx$/, /\.ts\?tsx/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'react',
        'react-router-dom'
      ],

      dts: './auto-imports.d.ts'
    })
  ],
})
