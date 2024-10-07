const indrajeet = require('http');
// console.log(http);

var shinde =  indrajeet.createServer((req, res)=>{
    console.log("u called for " + req.url);
    if(req.url == "/api/users")
    {
        res.write("Hey!! I'm Indrajeet...");
        res.end();
    }
    else
    {
        res.write("some other reply!");
        res.end();
    }
});
shinde.listen(9999,()=>{console.log("Server started at port no 9999");})