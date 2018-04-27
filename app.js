const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        port        = process.env.PORT || 3000;




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.send(`hello from root!`);

});


app.listen(port,function() {
    console.log(`Listening from ${port}`);
})