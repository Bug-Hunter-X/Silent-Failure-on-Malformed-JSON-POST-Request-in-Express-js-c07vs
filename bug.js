const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Missing error handling for req.body parsing
  console.log(data); 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));