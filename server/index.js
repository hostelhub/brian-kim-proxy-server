const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use('/hostels/:hostelId', express.static(path.join(__dirname, '../public')));

app.get('/api/hostels/:hostelId', (req, res) => {
  const Id = req.params.hostelId;
  axios.get(`http://localhost:3002/api/hostels/${Id}`)
    .then(hostels => (res.status(200).send(hostels.data)))
    .catch(err => console.log(err))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});