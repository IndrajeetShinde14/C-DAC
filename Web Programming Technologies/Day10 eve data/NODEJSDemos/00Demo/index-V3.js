const fs = require('fs');

console.log("Hi...............");

fs.readdir("C:\\Users\\INDRAJEET\\Downloads\\Semester Results",(error, result)=>
{
    if(error == null)
    {
        for(var i = 0; i <result.length; i++)
        {
            console.log(result[i]);
        }
    }
    else{
        console.log(error);
    }
});


console.log("Bye...............");

