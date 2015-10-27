var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/pushMessage',function(req, res){
	res.render('PushMessageToUsers', {
    title: 'Publish!'
  });
});
app.use('/pushMessage',require('./views/PushMessageToUsers')());

app.listen(process.env.PORT || 3000);