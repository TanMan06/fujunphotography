const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// GET route to respond to browser requests
app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1><p>Submit your message using the /submit endpoint.</p>');
});

// POST route for submitting data
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  // You would store this in a database, for now just log it.
  console.log({ name, email, message });
  res.status(200).json({ success: true, message: 'Data received' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
