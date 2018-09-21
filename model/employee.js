var mongoose=require('mongoose');
var schema=mongoose.Schema({
    employeeId:Number,
    employeeName:String
});

var model=mongoose.model('employee',schema);

module.exports=model;