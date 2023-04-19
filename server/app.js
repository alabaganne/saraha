const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({
  origin: "*"
}));

app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
