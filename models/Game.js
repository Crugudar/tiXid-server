
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  board: Array,
  cards: Array,
  player1: Array,
  player2: Array,
  player3: Array,
  player4: Array,
  game: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;