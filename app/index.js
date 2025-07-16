const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Hoodie", price: 45 },
  ]);
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
