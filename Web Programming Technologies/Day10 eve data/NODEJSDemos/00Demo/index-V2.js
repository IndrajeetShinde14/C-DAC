const ias = require('fs');
// console.log(fs);

console.log("Hi...............................................")

var arr = ias.readdirSync("C:\\Users\\INDRAJEET\\Downloads\\Semester Results")
for(var i = 0; i <arr.length; i++)
{
    console.log(arr[i]);
}

console.log("Bye...............................................")

