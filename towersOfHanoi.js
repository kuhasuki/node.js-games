function HanoiGame () {
	stacks: [[3,2,1],[],[]],
	isWon: function (){
		if (this.stacks === [[],[],[3,2,1]] || this.stacks === [[],[3,2,1],[]])
			return true;
		else 
			return false;
	},
	isValidMove: function (startIdx, endIdx) {
		if (stacks[startIdx].length === 0)
			return false;
		else if (stacks[startIdx][startIdx.length - 1] > stacks[endIdx][endIdx.length - 1]) 
			return false;
		else if (stacks[startIdx] === undefined || stacks[endIdx] === undefined)
			return false;
		else
			return true;
	}

}

testGame = new HanoiGame;
console.log(testGame.stacks);