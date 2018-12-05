const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index');
});

app.post('/', (req, res) => {
  res.redirect('/invitation');
});

app.get('/invitation', (request, response) => {
  response.send('invitations');
});


app.listen(3000);

