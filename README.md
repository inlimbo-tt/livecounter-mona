# Live counter
Static GitHub Pages frontend, Firebase Realtime Database backend. No build needed.

1. Create a Firebase project on Spark. Create Realtime Database in locked mode.
2. Enable Email/Password authentication, create an admin user, copy its UID.
3. Replace YOUR_ADMIN_UID in database.rules.json; paste the rules into Realtime Database > Rules and publish.
4. In Realtime Database > Data, create root child counter with numeric value 1 (not a string).
5. Project settings > General > Your apps > Add web app. Copy firebaseConfig into firebase-config.js, including databaseURL from the database console if absent.
6. Authentication > Settings > Authorized domains: add localhost for local testing and YOUR-USERNAME.github.io for production.
7. Run python3 -m http.server 8000 in this directory. Open http://localhost:8000/ and http://localhost:8000/admin/.
8. Create an empty public GitHub repository live-counter. Run git init -b main; git add .; git commit -m 'Initial counter'; git remote add origin https://github.com/YOUR-USERNAME/live-counter.git; git push -u origin main.
9. GitHub repository Settings > Pages > Deploy from a branch > main > / (root) > Save.
10. Open the Pages URL, tap Enable sound, sign into /admin/ in another tab/device and test.

Space increments unless typing in an input. 99 wraps to 1. Sound requires a user gesture and may be suspended in background tabs or when phones lock. Initial load does not ding. Public reads are permitted; only the specified UID can write. Never commit your password or a service account key. Firebase web config is public by design.

The Firebase SDK is pinned to 10.14.1. No live Firebase project is included; test against your own project before use.
