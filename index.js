const express = require('express');
const { createUser, getUserById } = require('./src/controller/userController');

const app = express();
app.use(express.json());

app.post('/user', createUser);
app.get('/user/:id', getUserById);

app.listen(3000, () => console.log("Server running on 3000"));
