var express = require('express');
var mongose = require('mongoose')
var app = express();

app.use('/static', express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");

const mongoDB = 'mongodb+srv://adrel410:Kenny@0609@cluster0.ndyixac.mongodb.net/?retryWrites=true&w=majority'
mongose.connect(mongoDB)
mongose.Promise = global.Promise;
let db = mongose.connection;
db.on('error', console.error.bind(console, "MongoDB connention error: "))


app.get('/', function(req, res){
    res.render('todo.ejs');
})

app.post('/', (req, res) => {
    console.log(req.body.content)
})

app.listen(3000, function(){
    console.log('App listening on port 3000')
})