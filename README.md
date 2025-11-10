# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:


```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Deploying to GitHub Pages

This project is preconfigured to deploy with GitHub Pages using GitHub Actions.

Steps:

1. Push the repo to GitHub (make sure your default branch is `main` or `master`).
2. In GitHub, go to Settings → Pages, and set Source to "GitHub Actions".
3. Push a commit to trigger the `Deploy Vite site to GitHub Pages` workflow.
4. Your site will be available at:
   - https://<USERNAME>.github.io/ for a repo named `<USERNAME>.github.io`, or
   - https://<USERNAME>.github.io/<REPO>/ for a normal project repo.

Notes:

- The Vite `base` is set dynamically in `vite.config.ts` to work for both root pages and project pages.
- The workflow files are under `.github/workflows/deploy.yml` and publish the `dist` folder.
- No `homepage` field is required in `package.json` for this setup.

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
