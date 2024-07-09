# Simple Jokes
- a small project to understand the very basics of fullstack development
- it serves an array of jokes from the backend server to the frontend
- backend is simply written in JavaScipt using ExpressJS
- frontend is ReactJS and TailwindCSS for styling
- axios package is used to fetch the data from backend
  
## TODOS
- [x] setup backend
- [x] setup frontend
- [x] merge backend with frontend (send request using axios to the endpoint)
- [x] add cors in server.js backend code or proxy in vite.config.js in frontend code
- [x] deploy

## Backend
```
cd backend
npm i
npm run start
```

## Frontend
```
cd frontend
npm i
npm run dev
```

## Deploy
```
cd frontend
npm run build
```
- move dist folder from frontend to the backend 
- update server.js
```
app.use(express.static('dist))
```
- deploy backend folder OR
- just upload dist folder on netlify

NOTE : this is a bad practice as the changes from frontend doesn't propagate automatically