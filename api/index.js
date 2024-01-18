const express = require('express');
const app = express();
const cors = require('cors');
const app = use(cors());

app.get('/test', (req,res) => {
    res.json('test ok sure');
});

app.listen(4000)