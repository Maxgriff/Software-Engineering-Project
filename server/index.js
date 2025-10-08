// This will be our main server file

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('An example API call!')
})

app.listen(port, () => {
    console.log("server listening on port " + port);
})
