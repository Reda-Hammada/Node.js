
let result = 0

for( let i = 2; i < process.argv.length; i++){
 result = result + Number(proccess.argv[i]);
}
console.log(result);