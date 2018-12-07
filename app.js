const express = require('express');
const app = express();

app.use(express.urlencoded());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/invite', (req, res) => {
  const {title, description} = req.body;
  res.redirect(`/invitation/?title=${title}&description=${description}`);
});

app.get('/invitation/', (req, res) => {
  res.render('invitation', {...req.query})
});


app.listen(3000);

