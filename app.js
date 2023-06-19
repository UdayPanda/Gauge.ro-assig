const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
];


app.get('/', (req, res) => {
    res.send('User List!')
})

app.get('/api/users', (req, res) => {
    res.send(users);
})

app.get('/api/users/:id', (req, res) => {
    const result = users.filter(element =>
        element.id === parseInt(req.params.id))
    res.send(result);
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})