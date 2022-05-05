
const readline = require('readline');
// 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter a : ', (answer1) => {
    rl.question('Please enter b : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`The sum is ${result}`);
        rl.close();
    });
});