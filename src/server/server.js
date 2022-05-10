const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/mailbox', (req, res) => {
    res.sendFile(`${__dirname}/data/inbox.json`);
});

app.listen(3001, () => {
    console.log('Application listening on port 3001!');
});