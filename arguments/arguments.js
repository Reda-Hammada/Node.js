'use strict';
var result = 2;
for( let i = 2; i < process.argv.length; i++){
 result = result + Number(process.argv[i]);
}
console.log(result);