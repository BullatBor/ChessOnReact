# Игра "Шахматы" с использованием React, TypeScript и принципов ООП

Этот проект представляет собой реализацию игры "Шахматы" с использованием языка программирования JavaScript, библиотеки React и языка TypeScript, а также принципов объектно-ориентированного программирования (ООП).

## Установка

1. Клонируйте репозиторий на свой компьютер:

## Структура проекта
*** Folders structure
#+begin_src bash
  .
  ├── README.md
  ├── package-lock.json
  ├── package.json
  ├── src
  │   ├── assets<~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Directory with images.
  │   │   ├── black-bishop.png
  │   │   ├── black-king.png
  │   │   ├── black-knight.png
  │   │   ├── black-pawn.png
  │   │   ├── black-queen.png
  │   │   ├── black-rook.png
  │   │   ├── BlackCrown.png
  │   │   ├── white-bishop.png
  │   │   ├── white-king.png
  │   │   ├── white-knight.png
  │   │   ├── white-pawn.png
  │   │   ├── white-queen.png
  │   │   ├── white-rook.png
  │   │   └── WhiteCrown.png
  │   └── components
  │   │   ├── board
  │   │   │   ├── Board.module.css
  │   │   │   ├── BoardComponent.tsx
  │   │   │   ├── CellComponent.tsx
  │   │   │   ├── LostFigures.tsx
  │   │   │   └── Timer.tsx
  │   │   └── modal
  │   │       ├── Modal.module.css
  │   │       └── Modal.tsx
  │   ├── models
  │   │   ├── figures
  │   │   │   ├── Bishop.tsx  
  │   │   │   ├── Figures.tsx  
  │   │   │   ├── King.tsx  
  │   │   │   ├── Knight.tsx  
  │   │   │   ├── Pawn.tsx  
  │   │   │   ├── Queen.tsx  
  │   │   │   └── Rook.tsx     
  │   │   ├── Board.tsx
  │   │   ├── Cell.tsx
  │   │   ├── Colors.tsx
  │   │   └── Player.tsx
  │   ├── App.css
  │   ├── App.tsx
  │   ├── index.css
  │   └── index.tsx
  ├── tsconfig.json
  └── gitignore.

  7 directories, 46 files
#+end_src

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
