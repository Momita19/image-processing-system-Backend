require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://Momita:Momita@cluster0.gckilv2.mongodb.net/',
  PORT: process.env.PORT || 5000,
//   QUEUE_URL: process.env.QUEUE_URL || 'amqp://localhost',
//   WEBHOOK_URL: process.env.WEBHOOK_URL || 'http://example.com/webhook',
};