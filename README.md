# Introduction :

Cette application a été conçue afin de regrouper divers jeux de plateau en ligne. Le but est de proposer plusieurs jeux auxquels jouer entre amis, afin de se divertir et de passer un bon moment. L'application se veut simple et aussi conviviale que possible.

# Pour les développeurs :
## Processus d'installation :

1. Installez la dernière version LTS de Node.js en la téléchargeant et en l'exécutant depuis le site suivant : https://nodejs.org/.

N.B. (sous Windows) :
Certains terminaux comme Windows PowerShell peuvent bloquer l'exécution de scripts, rendant l'installation de Node.js impossible.
Pour résoudre cela :

- Ouvrez un nouveau terminal PowerShell en tant qu’administrateur
- Tapez Get-ExecutionPolicy pour vérifier si le mode est sur "Restricted"
- Si c’est le cas, augmentez temporairement vos privilèges avec Set-ExecutionPolicy RemoteSigned
- Ensuite, exécutez l’installateur Node.js.

2. Clonez le projet depuis GitHub en utilisant SSL, soit via cmd, Git Bash, soit via une interface graphique comme GitHub Desktop.

3. Une fois le projet cloné, accédez au dossier via un terminal, par exemple : C://Chemin_vers_votre_dossier/tiny-games
4. Executez la commande : npm i
5. Lancez le projet via : npm run dev
----------------------------------------------------------------------------------------------------------------------------------------------------

# Introduction :

This application was designed to bring together various online board games. The goal is to offer several games to play with friends in order to have fun and enjoy a good time together. The application aims to be simple and as user-friendly as possible.

# For developers :
## Installation process :

1. Install the latest LTS version of Node.js by downloading and running the installer available at https://nodejs.org/.

Note (on Windows):
Some terminals like Windows PowerShell may block the execution of scripts, making the Node.js installation impossible.
To fix this:
- Open a new PowerShell terminal as administrator
- Type Get-ExecutionPolicy to check if you are in "Restricted" mode
- If so, temporarily elevate your privileges using Set-ExecutionPolicy RemoteSigned
- Then, run the Node.js installer.

2. Clone the GitHub project using SSL via cmd, Git Bash, or a graphical interface like GitHub Desktop.

3. Once the project is cloned, navigate to the project directory via a terminal, for example: C://Path_to_your_folder/tiny-games
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
