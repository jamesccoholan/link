# Copy Project Guide

---

## 🚫 Delete git history and remote origin

To completely remove the git history and disconnect from the remote origin, use the following command:

```powershell
Remove-Item .git -Recurse -Force
```

---

## 🔥 Change Firebase

Replace your current `firebaseConfig` with the following details from your new Firebase app:

```javascript
const firebaseConfig = {
  apiKey: "AIzGo",
  authDomain: "nexapp.com",
  projectId: "nade",
  storageBucket: "nex.com",
  messagingSenderId: 302",
  appId: "1:eaf7",
  measurementId: "GXG",
};
```

### Service Account JSON

🔑 Make sure to activate all services on the Firebase portal.

### Change the CLI project attachment

Switch to your desired Firebase project using:

```bash
firebase use --add
```

---

## 🛠️ Setup functions

First, navigate to the functions directory:

```bash
cd functions
```

Then, remove the `node_modules` directory and reinstall the necessary packages:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 🌐 Update CORS Website

- **Important!** Ensure the CORS website URL is exact. Avoid having a trailing `/` at the end.

---

## 🌍 Setting the Environment

Execute the following command to set your Firebase functions environment:

```bash
firebase functions:config:set env.mode="production"
```

---

## 📝 Naming Convention

- To avoid confusion, maintain consistency by using the same name for:
  - Local files
  - GitHub repositories
  - Firebase projects

---

## Google Cloud Console Setup

1. 🌐 Open [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to the **Cloud Functions** section.
3. ✅ Select the checkbox next to the function you wish to make public. (Note: Do **not** click the function name, only the checkbox.)
4. Click on "Permissions" at the top.
5. Select "Add principal".
6. Type `allUsers` in the "New principals" field.
7. From "Select a role", navigate to **Cloud Functions** and choose **Cloud Functions Invoker**.
8. Save your changes.

### Functions Site

Access the functions dashboard directly from [here](https://console.cloud.google.com/functions/list?env=gen1&project=nextgensolutions&tab=logs).

---
