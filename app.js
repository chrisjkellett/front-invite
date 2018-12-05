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
  res.send({
    title: req.body
  })
});

// app.get('/invitation', (request, response) => {
//   response.send('invitations');
// });


app.listen(3000);

