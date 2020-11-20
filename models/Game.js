
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  
  cards: [{type:String}],
  gameName: {type:String},

  player1cards: [{type:String}],
  player1Id:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  player1points:{type:Number},


  player2cards: [{type:String}],
  player2Id:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  player2points:{type:Number},

  player3cards: [{type:String}],
  player3Id:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  player3points:{type:Number},

  player4cards: [{type:String}],
  player4Id:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  player4points:{type:Number},
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;