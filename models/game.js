const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  developers: { type: String, required: 'This field is required' },
  designers: { type: String, required: 'This field is required' },
  description: { type: String, required: 'This field is required' },
  releaseYear: { type: Number, required: 'This field is required'}
});

module.exports = mongoose.model('game', gameSchema);
