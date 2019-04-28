const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 9000;

app.use('/hostels/:hostelId', express.static(path.join(__dirname, '../public')));

app.get('/api/hostels/:id/photos', (req, res) => {
  const id = req.params.id;
  axios.get(`http://34.205.69.191/api/hostels/${id}/photos`)
    .then(hostels => (res.status(200).send(hostels.data)))
    .catch(err => console.log(err))
})

app.get('/api/hostels/:hostelId/calendar', (req, res) => {
  const id = req.params.hostelId;
  axios.get(`http://18.218.213.148/api/hostels/${id}/calendar`)
    .then(hostels => (res.status(200).send(hostels.data)))
    .catch(err => console.log(err))
});

app.get('/api/reviews/:hostelId/reviews', (req, res) => {
  const id = req.params.hostelId;
  axios.get(`http://localhost:3003/api/reviews/${id}/reviews`)
    .then(hostels => (res.status(200).send(hostels.data)))
    .catch(err => console.log(err))
});

app.listen(port, () => {
  console.log(`server running at: http://18.222.164.21:${port}`);
});