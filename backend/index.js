const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Dummy logic for now
  if (email === 'user@example.com' && password === 'password') {
    return res.json({ message: 'Login successful', token: 'dummy-token', role: 'user' });
  } else if (email === 'hospital@example.com' && password === 'password') {
    return res.json({ message: 'Login successful', token: 'dummy-token', role: 'hospital' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});