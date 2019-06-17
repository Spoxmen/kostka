var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var port = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post('/', function (req, res, next) {
    var dane = req.body
    console.log(dane.ST);
    console.log(dane.IK);

    var ilosc_sukcesow=0;
    var ilosc_przerzutow=0;

    for (var i=0; dane.IK > i; i++){
        var wynik =  1 + Math.floor(Math.random() * 10);
            if(wynik>=dane.ST){
                ilosc_sukcesow=ilosc_sukcesow+1
            if(wynik==10){
                ilosc_rzutow++
                ilosc_przerzutow++
            }
            }
    }
    console.log('Ilość sukcesów to ' + ilosc_sukcesow)
    console.log('Ilość przerzutów to ' + ilosc_przerzutow)
    var response = 'Ilość sukcesów to ' + ilosc_sukcesow
    res.send(response)
})

module.exports = app;
module.exports = app;