# Vue 3 + Vite + TypeScript Starter Template

A modern, batteries-included Vue 3 starter project using:

- ⚡ Vite
- 🧑‍💻 TypeScript
- 🎨 Tailwind CSS
- 🌿 Pinia (State Management)
- 🧭 Vue Router
- ☁️ AWS Amplify Gen 2 Ready
- ✅ ESLint + Prettier + Alias Support (`@ = /src`)

## 📦 Getting Started

### 1️⃣ Create a new project from this template

```bash
npx degit subrootdev/vue-amplify-template my-new-app
cd my-new-app
```

Or use with Vite directly (if template is public):

```bash
npm create vite@latest my-new-app -- --template subrootdev/vue-amplify-template
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

## ⚙️ Folder Structure

```
src/
├── assets/       # Logos, images, fonts
├── components/   # Vue components (common/shared)
├── composables/  # Reusable logic
├── layouts/      # Page layouts
├── router/       # Vue Router setup
├── services/     # API calls or business logic
├── stores/       # Pinia stores
├── types/        # TypeScript types
├── utils/        # Utility functions
├── views/        # Page views
```

## ☁️ Amplify Gen 2 Integration

This template is ready to work with AWS Amplify Gen 2.

### 📦 Install dependencies

```bash
npm install @aws-amplify/ui-vue aws-amplify
```

### ⚙️ Initialize Amplify

```bash
npm create amplify@latest
npx ampx sandbox
amplify pull --sandbox
```

You can then add features like auth, storage, or GraphQL API:

```bash
amplify add auth
amplify push
```

## 🧹 Code Quality Tools

### ✅ ESLint + Prettier Integration

- Uses eslint-plugin-prettier and eslint-config-prettier
- Vue 3 + TypeScript rules
- Pre-configured .eslintrc.js and .eslintignore

### ✅ Prettier Config (.prettierrc)

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### ✅ Preconfigured .eslintignore

```
node_modules/
dist/
.vite/
.cache/
.temp/
.tmp/
*.tsbuildinfo

amplify/#current-cloud-backend/
amplify/backend/.temp/
amplify/backend/.build/
amplify/mock-data/
amplify/.config/
amplify/.amplifyrc

.vscode/
.cursor/
.idea/
.DS_Store

.env
.env.local
.env.*.local
```

## 📦 Git Ignore

The .gitignore includes:

```
node_modules/
dist/
.vite/
.cache/
.temp/
.tmp/
*.tsbuildinfo

# Amplify
amplify/#current-cloud-backend/
amplify/backend/.temp/
amplify/backend/.build/
amplify/mock-data/
amplify/.config/
amplify/.amplifyrc

# Editor
.vscode/
.cursor/
.idea/

# Logs and system files
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
.DS_Store

# Env files
.env
.env.local
.env.*.local
```

## 🧑‍💻 Maintainer

Made with ❤️ by @subrootdev

Feel free to fork, contribute, or use as your go-to Vue starter kit!
