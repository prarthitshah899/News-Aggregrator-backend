const express = require('express')
const app = express()
const port = 3000
var news = require('./news_route');
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/news',news)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))