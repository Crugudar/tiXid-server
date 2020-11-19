
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  image: {type:String},
  name: {type:String},
  author:{ type: Schema.Types.ObjectId, ref: 'User' },
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const CustomCard = mongoose.model('CustomCard', cardSchema);

module.exports = CustomCard;