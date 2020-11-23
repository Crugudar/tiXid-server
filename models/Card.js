
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardOrigSchema = new Schema({
  url: {type:String},
 
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Card = mongoose.model('Card', cardOrigSchema);

module.exports = Card;