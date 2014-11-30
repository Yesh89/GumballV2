
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only


app.get('/', user.index);
app.get('/users', user.list);

app.get('/index/:Model/:State/:Serial', user.getindex);

app.get('/index/:Model/:State/:Serial', user.getindexhascoin);

app.get('/index/:Model/:State1/:Serial', user.getindexturncrank);

app.get('/index/:Model/:State2/:Serial', user.getindex);

app.post('http://localhost:8080/GrailsGumballMachineVer2/gumballMachine/index/?id', user.insertquater);

app.post('http://localhost:8080/GrailsGumballMachineVer2/gumballMachine/index/?id', user.turncrank);

app.post('/GumballAction',user.GumballAction);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});









