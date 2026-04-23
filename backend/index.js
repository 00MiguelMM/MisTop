const express = require('express');
const rankingsRoutes = require('./src/routes/rankings.routes');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/rankings', rankingsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



