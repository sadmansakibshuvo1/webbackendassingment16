const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 5050;

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api', blogRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
