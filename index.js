const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const app = express();


const csrfProtection = csrf({ cookie: true });
module.exports.csrfProtection = csrfProtection;

const PORT = 3001;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('got it');
})

app.get('/api/csrf', csrfProtection, (req, res) => {
    const token = req.csrfToken();
    res.json({ csrfToken: token });
})

app.listen(PORT, () => console.log('App running on ' + PORT));