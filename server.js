var express=require("express");
var app=express();

app.get("/",(req,resp)=>{
     resp.send(
        "<h1>Constro Sales </h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sale</h3>"
        + "<br/>"
        + "<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Hololgraphic Devices</li>"
        +"<li>Samrt Watches</li>"
        +"<li>Gaming Consoles</li>"
        + "</ol>"

     );

});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Constro Sales </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: xyz </li>"
            +"<li>Director: abc</li>"
            +"<li>Subject Matter Expert: abcd</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Constrso Sales </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("Online shopping running on port 9000");
