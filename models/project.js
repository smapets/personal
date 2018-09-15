//Mongoose schema and model configuration
var mongoose=require("mongoose");


var projectSchema=new mongoose.Schema({
    title:String,
    description:String,
    created:{type:Date,default:Date.now}
});

var Project=mongoose.model("Project",projectSchema);


module.exports=Project;
