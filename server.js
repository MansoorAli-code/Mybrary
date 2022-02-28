const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)

const mongoose = require('mongoose');
const url = `mongodb+srv://mansoor:vMG20QdlA9W8ibLY@cluster0.98v4f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url,{
    useNewUrlParser: true
})
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Connected to mongoose"))


app.listen(process.env.PORT || 3000)

//db password: vMG20QdlA9W8ibLY