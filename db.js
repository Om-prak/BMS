const mongoose = require('mongoose');

mongoose.connect
('mongodb+srv://prakashv124421:23968514@bmscluster.vhuz9.mongodb.net/BMS?retryWrites=true&w=majority&appName=bmscluster')
  .then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
});