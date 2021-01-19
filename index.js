const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
require('dotenv').config()

const app = express()
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials'),
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static('public'))

const port = 3123

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})