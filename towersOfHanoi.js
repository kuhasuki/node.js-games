var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
	this.stacks = [[3,2,1],[],[]];
}

HanoiGame.prototype.isValidMove = function (startIdx, endIdx) {
	console.log(this.stacks);
	if (typeof this.stacks[startIdx] === "undefined" || typeof this.stacks[endIdx] === "undefined")
		return false;
	else if (this.stacks[startIdx][startIdx.length - 1] > this.stacks[endIdx][endIdx.length - 1])
		return false;
	else if (this.stacks[startIdx].length === 0)
		return false;
	else
		return true;
};

HanoiGame.prototype.isWon = function(){
	if ((this.stacks[0].length === 0 && this.stacks[1].length === 0) ||  (this.stacks[0].length === 0 && this.stacks[2].length === 0))
		return true;
	else
		return false;
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx){
	this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
	console.log(this.stacks);
};

HanoiGame.prototype.print = function() {
	console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback) {
	var gamePrompt = function(response) {
		var moves = response.split(", ");
		if (this.isValidMove(moves[0], moves[1])){
			this.move(moves[0], moves[1]);
			callback();
		}
		else
			this.promptMove();
	};

	reader.question("Give start and end (you know what to do)!\n", gamePrompt.bind(this));

};

HanoiGame.prototype.run = function(completionCallback) {
	var killbock = function(){
		if (!this.isWon()) {
			this.promptMove(killbock);
		}
		else {
			return;
		}
	};

	if(this.isWon())
		completionCallback();
	else {
		this.promptMove(killbock.bind(this));
	}
};


var game = new HanoiGame;
game.run(function() {
	console.log("You won!");
});
