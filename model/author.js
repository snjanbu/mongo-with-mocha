var mongoose =require('mongoose');

var bookSchema=new mongoose.Schema({
    title:String,
    pages:Number
});

var authorSchema=new mongoose.Schema({
    name:String,
    age:Number,
    books:[bookSchema]
});

var author=mongoose.model('author',authorSchema);

module.exports=author;