const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/html-routes.js')(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});