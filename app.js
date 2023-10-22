const express = require('express');
const mustacheExpress = require('mustache-express');
const moment = require('moment-timezone');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public')); 

const timezones = ['Asia/Seoul', 'America/New_York', 'Europe/London'];
const date = moment().format('YYYY-MM-DD'); 


const times = timezones.map(tz => {
  return {
    timezone: tz, 
    time: moment().tz(tz).format('HH:mm:ss'),
    date: date
    }
  });

app.get('/', (req, res) => {

  res.render('index', {
    title: 'World Clock',
    times
    

  });

});

app.listen(3000);