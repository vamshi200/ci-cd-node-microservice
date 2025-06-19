const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js microservice running via CI/CD 🚀');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
