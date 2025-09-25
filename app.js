const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend'));

// Serve static files (css, js, images)
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // will use frontend/index.ejs
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Example API for your fetch()
app.get('/api/about', (req, res) => {
  res.json({
    title: "🌱 About Us",
    paragraphs: [
      "EcoLearn is a gamified learning platform for Classes 6–12.",
      "Our mission is to make education fun, accessible, and interactive."
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
