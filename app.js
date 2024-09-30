const express = require('express');
const connectDB = require('./config/db');
// const uploadRoutes = require('./routes/uploadRoutes');
// const statusRoutes = require('./routes/statusRoutes');
// const webhookRoutes = require('./routes/webhookRoutes');
// const { consumeTasks } = require('./queue/messageQueue');
// const { processImages } = require('./services/imageProcessingService');

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api', uploadRoutes);
// app.use('/api', statusRoutes);
// app.use('/api', webhookRoutes);

// Database Connection
connectDB();

// Start consuming tasks
// consumeTasks(processImages);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

