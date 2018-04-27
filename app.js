const   express     = require("express"),
        app         = express(),
        bodyParser  = require("body-parser"),
        port        = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/views`));
const todoRoutes = require(`./routes/todos`)

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.use(`/api/todos`, todoRoutes);

app.listen(port,() => {
    console.log(`Listening from ${port}`);
})