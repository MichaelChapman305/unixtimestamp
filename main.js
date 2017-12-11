const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/time:date', (req, res) => {
  let uniTime = 0;
  let natDate = '';
  
  if (/([a-z])/g.test(req.params.date[1])) {
    uniTime = new Date(req.params.date).getTime() / 1000;
    natDate = new Date(uniTime * 1000).toString();
    if (natDate === 'Invalid Date') {
      natDate = 'Null';
      uniTime = 'Null';
    } 
  } else {
    uniTime = parseInt(req.params.date.slice(1), 10);
    natDate = new Date(uniTime * 1000).toString();
    if (natDate === 'Invalid Date') {
      natDate = 'Null';
      uniTime = 'Null';
    } 
    console.log(natDate);
  }
  res.render('time', {uniTime, natDate});

});

app.listen(process.env.PORT || 5000);
