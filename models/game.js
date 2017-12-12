const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  body: { type: String },
  rating: { type: Number },
  upvote: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }]
},{
  timestamps: true
});

const gameSchema = mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  image: { type: String, required: 'This field is required' },
  developers: { type: String, required: 'This field is required' },
  designers: { type: String, required: 'This field is required' },
  description: { type: String, required: 'This field is required' },
  releaseYear: { type: Number, required: 'This field is required'},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [ commentSchema ]
});

gameSchema
  .virtual('avgRating')
  .get(function() {
    const avg = this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0) / this.comments.length;

    return avg.toFixed(1);
  });



module.exports = mongoose.model('game', gameSchema);
