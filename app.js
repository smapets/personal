//Required packages

var bodyParser=require("body-parser"),
expressSanitizer=require("express-sanitizer"),
express=require("express"),
path=require("path"),
app=express();


//App config

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(expressSanitizer());



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is running");
})