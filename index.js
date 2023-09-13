const express = require('express');
const db = require('./db/db');

const usersRoutes = require('./routes/usersRoutes')

const app = express();
const PORT = process.env.port || 3000;

db.connectToMongoDB();

app.use(express.json());

app.use('/api', usersRoutes)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});