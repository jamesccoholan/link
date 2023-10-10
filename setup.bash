# Windows PowerShell Script for Firebase Setup Automation

# Ensure Firebase CLI is installed
if (-not (Get-Command firebase -ErrorAction SilentlyContinue)) {
    Write-Error "Firebase CLI is not installed. Please install it first."
    exit 1
}

# 1. Firebase Login
# This step is assumed to be done manually since it's a one-time setup and involves opening a web browser for authentication

# 2. Initialize a Firebase Project
# Here, we are assuming that you want to setup Firestore, Functions, and Hosting. Adjust as per your needs.
$firebaseInitInput = @"
y
firestore functions hosting
y
y
y
"@ -split "`n"

$firebaseInitInput | firebase init

# 3. Set Default Firebase Project
# Replace 'your_project_id' with your actual Firebase project ID.
$firebaseUseInput = @"
your_project_id
"@ -split "`n"

$firebaseUseInput | firebase use --add

# 4. Build (assuming you are using npm and have a build script in package.json)
npm run build

# 5. Deploy to Firebase
firebase deploy

# 6. Start Emulators (assuming you've set them up in firebase.json)
firebase emulators:start

Write-Output "Firebase setup completed."
