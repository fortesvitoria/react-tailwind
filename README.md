# aulas-react-tailwind

## Passo a passo - utilizar CMD ou Gitbash

1. https://vite.dev/guide/

npm create vite@latest .


2. https://tailwindcss.com/docs/installation/using-vite
npm install tailwindcss @tailwindcss/vite

1. No vite.config.ts, adicionar:

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    2. tailwindcss(),
  ],
})

2. No css adicionar:
@import "tailwindcss";

3. https://headlessui.com/
npm install @headlessui/react

4. https://heroicons.com/
npm install @heroicons/react


Para rodar: npm run dev
Para parar: Ctrl C


Quando baixar:
1. npm install