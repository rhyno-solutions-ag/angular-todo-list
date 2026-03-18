# Angular Todo App – Setup-Anleitung

Diese App ist eine Todo-Liste, die im Browser läuft. Du kannst Aufgaben hinzufügen, bearbeiten und löschen. Die Daten werden in Firebase gespeichert.

## 1) Was du brauchst

Folgende Programme müssen auf deinem Computer installiert sein:

- **Node.js** (LTS-Version) – Download: https://nodejs.org
- **npm** – Wird automatisch mit Node.js installiert
- **Git** – Download: https://git-scm.com
- **Visual Studio Code** – Download: https://code.visualstudio.com

## 2) Projekt herunterladen und einrichten

### 2.1 Terminal öffnen

- Öffne **Visual Studio Code**
- Öffne das Terminal: Menü → Terminal → Neues Terminal (oder `Strg + Ö`)

### 2.2 Projekt von GitHub klonen

Gib folgende Befehle nacheinander ins Terminal ein:

```bash
git clone https://github.com/rhyno-solutions-ag/angular-todo-list.git
cd angular-todo-list
```

Das lädt das Projekt herunter und wechselt in den Projektordner.

### 2.3 Abhängigkeiten installieren

Im Terminal eingeben:

```bash
npm install
```

Dieser Befehl installiert alle benötigten Bibliotheken. Das kann 1-2 Minuten dauern.

## 3) Firebase einrichten

Firebase speichert die Todo-Daten in der Cloud. Du erhältst die Zugangsdaten von deinem Betreuer.

### 3.1 Environment-Dateien erstellen

Die Firebase-Konfigurationsdateien müssen zuerst erstellt werden (sie sind aus Sicherheitsgründen nicht im Repository).

**Im Explorer (linke Seite von VS Code):**

1. Öffne den Ordner `src/environments`
2. Erstelle zwei neue Dateien:
   - Rechtsklick auf `environments` → Neue Datei → `environment.ts`
   - Rechtsklick auf `environments` → Neue Datei → `environment.development.ts`

### 3.2 Firebase-Daten eintragen

**In die Datei `environment.ts`** folgenden Code einfügen:

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

**In die Datei `environment.development.ts`** folgenden Code einfügen:

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

Ersetze die Platzhalter (`HIER_DEIN_...`) mit den Daten, die du von deinem Betreuer erhalten hast.

**Wichtig:** Trage die Daten in **beide** Dateien ein!

## 4) App starten

### 4.1 Development-Server starten

Im Terminal eingeben:

```bash
npm start
```

Der Server startet jetzt. Das kann beim ersten Mal etwas länger dauern.

### 4.2 App im Browser öffnen

Wenn im Terminal `Compiled successfully` steht, öffne deinen Browser und gehe zu:

```
http://localhost:4200
```

Du solltest jetzt die Todo-App sehen! 🎉

### 4.3 Änderungen sehen

Wenn du am Code etwas änderst und speicherst, lädt die App im Browser automatisch neu.

## 5) Weitere Befehle

```bash
# App im Browser öffnen (Development-Server)
npm start

# App für Produktion bauen
npm run build

# Tests ausführen
npm test
```
