var partial = require('lodash-node/modern/functions/partial');
var board = require('./board');
var data = require('./data');
var fen = require('./fen');
var configure = require('./configure');
var anim = require('./anim');

module.exports = function(cfg) {

  this.data = data(cfg);

  this.getFen = partial(fen.write, this.data.pieces);

  this.reconfigure = anim(configure, this.data);

  this.reset = partial(board.reset, this.data);

  this.toggleOrientation = anim(board.toggleOrientation, this.data);

  this.setPieces = anim(board.setPieces, this.data);

  this.selectSquare = partial(board.selectSquare, this.data);

  this.apiMove = anim(board.apiMove, this.data);

  this.playPremove = anim(board.playPremove, this.data);

};
