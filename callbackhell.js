var readline = require('readline');
// var clock = new Clock();
var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
	if(numsLeft > 0) {
		reader.question("Type in a number\n", function(answer) {
			var response = parseInt(answer);
			sum += response;
			console.log("The hithertoo incremented value is humbly: " + sum);
			addNumbers(sum, numsLeft - 1, completionCallback);
		});
	}
	else if (numsLeft === 0) {
		completionCallback(sum);
	}
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
	process.exit();
});
