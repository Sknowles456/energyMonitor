var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var pythonShell = require('python-shell');
// default routes used in app.use
var api = require('./server/routes/api')
var port = 3000;
var http = require('http');
var Cloudant = require('cloudant');

var app = express();


 var pyOptions = {
   mode:'text', // return text based responses from child process
 };
// child process script on the server to predict future state of the envrionment.
function forecast(){
  console.log("Staring execution of Forecasting at"+ new Date());
  pythonShell.run('models/forecast.py',pyOptions, function (err,result) {
    if (err) throw err;
    console.log('Finished Forecasting at '+ new Date());
    console.log(result); // display all prints from the python script.
  });
}
function notifications(){
  console.log("Staring execution of Notifications at"+ new Date());
  pythonShell.run('models/notifications.py',pyOptions, function (err,result) {
    if (err) throw err;
    console.log('Finished Notifcation generation at '+ new Date());
    console.log(result); // display all prints from the python script.
  });
}
setInterval(forecast, 150000); // run the script every 5 minutes, as this is when new data is pushed to DB.
setInterval(notifications, 300000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Static paths
app.use(express.static(path.join(__dirname, 'dist')));
//Middleware Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// any url calls that  go through /api lead to the api routing folder
//any other url calls gesent to index.html
app.use('/api', api);
app.use('*', (req,res)=> {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});
// run the server on port 3000
app.listen(port, function(){
  console.log('Server Running on port: '+ port);
});
