var arguments = process.argv
function add(a, b, c) {
	return parseInt(a)+parseInt(b)+parseInt(c)
}

var sum = add(arguments[2], arguments[3], arguments[4])
console.log("The sum is : ", sum)