---
title: "Private Messaging Real-time Chat App"
description: "This is a private messaging real-time chat app built with Firebase and React.js"
date: "January 6 2026"
demoURL: "https://chatappsarvarbek.netlify.app"
repoURL: "https://github.com/IlyosovSarvarbek/chat_app/"
---

## Private Messaging — Real-time Chat App

A minimal, fast one-on-one private messaging app built with **React.js** and **Firebase**. Users can register, sign in, sign out, and exchange real-time messages using Firestore realtime updates.

> Small footprint · Instant updates · Secure one-on-one conversations

### Features
- Authentication: Register, Login, Logout (Firebase Auth)
- Private one-on-one chats only — no group chats
- Real-time messaging via Firestore snapshot listeners
- Minimal, responsive UI built with React
- Light client-side state, optimized rendering for speed

### Highlights
- Privacy-first: conversations are strictly between two users
- Real-time: new messages appear instantly without refresh
- Fast: minimal components and efficient Firestore queries
- Simple data model: users collection + messages/conversations stored per pair

### Tech stack
- React (Create React App / Vite)
- Firebase Authentication
- Firestore (Realtime)
- Optional: CSS modules / Tailwind / Styled components

### Getting started
1. Clone the repo:
```bash
git clone https://github.com/IlyosovSarvarbek/chat_app.git
cd chat_app
```
2. Install dependencies:
```bash
npm install
```
3. Add Firebase config (example .env.local):
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```
4. Run locally:
```bash
npm start
```

### Usage
- Create an account or sign in with an existing one
- Find or select a contact and start a private conversation
- Messages sync instantly across devices thanks to Firestore realtime listeners
- Use Logout to end the session

### Data model (example)
- users (uid, displayName, photoURL, lastSeen)
- conversations or messages (senderId, receiverId, text, timestamp)
- Indexed queries fetch only the two-user conversation for fast reads

### Demo & Source
- Live demo: https://chatappsarvarbek.netlify.app
- Repo: https://github.com/IlyosovSarvarbek/chat_app/

### Contributing
Small improvements, bug fixes, and UI enhancements welcome. Open an issue or PR.

### License
Open source — see repository for license details.