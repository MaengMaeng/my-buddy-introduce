const mongoose = require('mongoose');

require('dotenv').config();

module.exports = () => {
  const connect = () => {
    mongoose.connect(process.env.MONGO_URL, (err) => {
      if (err) {
        console.error(`❌ Error on DB Connection: ${err}`);
      }
      console.log('✅ Connected on DB');
    });
  }
  connect();

  mongoose.connection.on('disconnected', connect);
};