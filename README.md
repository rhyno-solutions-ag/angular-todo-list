# Angular Todo App – Setup Guide

This app is a todo list that runs in the browser. You can add, edit, and delete tasks. The data is stored in Firebase.

## 1) What you need

The following programs must be installed on your computer:

- **Node.js** (LTS version) – Download: https://nodejs.org
- **npm** – Is installed automatically with Node.js
- **Git** – Download: https://git-scm.com
- **Visual Studio Code** – Download: https://code.visualstudio.com

## 2) Download and set up the project

### 2.1 Open the terminal

- Open **Visual Studio Code**
- Open the terminal: Menu → Terminal → New Terminal (or `Ctrl + Ö`)

### 2.2 Clone the project from GitHub

Enter the following commands one after another in the terminal:

```bash
git clone https://github.com/rhyno-solutions-ag/angular-todo-list.git
cd angular-todo-list
```

This downloads the project and switches to the project folder.

### 2.3 Install dependencies

Enter in the terminal:

```bash
npm install
```

This command installs all required libraries. This can take 1-2 minutes.

## 3) Set up Firebase

Firebase stores the todo data in the cloud. You will receive the access data from your supervisor.

### 3.1 Create environment files

The Firebase configuration files must be created first (they are not in the repository for security reasons).

**In the Explorer (left side of VS Code):**

1. Open the folder `src/environments`
2. Create two new files:
   - Right-click `environments` → New File → `environment.ts`
   - Right-click `environments` → New File → `environment.development.ts`

### 3.2 Enter Firebase data

**Insert the following code into the file `environment.ts`:**

```typescript
export const environment = {
  production: true,
  firebase: {
    apiKey: "HIER_DEIN_API_KEY",
    authDomain: "HIER_DEIN_AUTH_DOMAIN",
    projectId: "HIER_DEIN_PROJECT_ID",
    storageBucket: "HIER_DEIN_STORAGE_BUCKET",
    messagingSenderId: "HIER_DEIN_SENDER_ID",
    appId: "HIER_DEIN_APP_ID",
  },
};
```

**Insert the following code into the file `environment.development.ts`:**

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "HIER_DEIN_API_KEY",
    authDomain: "HIER_DEIN_AUTH_DOMAIN",
    projectId: "HIER_DEIN_PROJECT_ID",
    storageBucket: "HIER_DEIN_STORAGE_BUCKET",
    messagingSenderId: "HIER_DEIN_SENDER_ID",
    appId: "HIER_DEIN_APP_ID",
  },
};
```

Replace the placeholders (`HIER_DEIN_...`) with the data you received from your supervisor.

**Important:** Enter the data in **both** files!

## 4) Start the app

### 4.1 Start the development server

Enter in the terminal:

```bash
npm start
```

The server will start now. This may take a bit longer the first time.

### 4.2 Open the app in the browser

When `Compiled successfully` appears in the terminal, open your browser and go to:

```
http://localhost:4200
```

You should now see the todo app! 🎉

### 4.3 See changes

If you change something in the code and save, the app in the browser reloads automatically.

## 5) Additional commands

```bash
# Open app in browser (development server)
npm start

# Build app for production
npm run build

# Run tests
npm test
```
