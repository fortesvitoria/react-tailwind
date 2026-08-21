# react-tailwind

Repositório com aulas e exemplos utilizados para aprender e desenvolver aplicações utilizando **React**, **TypeScript**, **Vite**, **Tailwind CSS** e **Headless UI**.

## Arquivo `react-typescript-tailwind-aula1`

Aula base utilizada no desenvolvimento do front-end do projeto **GroupBeach**.

**Link da aula:**
https://www.youtube.com/watch?v=WnQ6WrffEok

---

## Passo a passo para criar um projeto react

Os comandos podem ser executados utilizando o **CMD** ou **Git Bash**.

### 1. Criar o projeto com Vite

Documentação:
https://vite.dev/guide/

Execute:

```bash
npm create vite@latest .
```

Durante a criação do projeto, selecione:

* Framework: **React**
* Variant: **TypeScript**

---

### 2. Instalar e configurar o Tailwind CSS

Documentação:
https://tailwindcss.com/docs/installation/using-vite

Instale as dependências:

```bash
npm install tailwindcss @tailwindcss/vite
```

#### 2.1 Configurar o `vite.config.ts`

Adicione o plugin do Tailwind:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

#### 2.2 Configurar o arquivo CSS

No arquivo principal de CSS, como `src/index.css`, adicione:

```css
@import "tailwindcss";
```

---

### 3. Instalar o Headless UI

Documentação:
https://headlessui.com/

Execute:

```bash
npm install @headlessui/react
```

---

### 4. Instalar o Heroicons

Documentação:
https://heroicons.com/

Execute:

```bash
npm install @heroicons/react
```

---

## Como executar o projeto já criado

Caso tenha acabado de clonar ou baixar o projeto, primeiro instale as dependências:

```bash
npm install
```

Em seguida, execute o projeto:

```bash
npm run dev
```

Para parar o servidor, pressione:

```bash
Ctrl + C
```
