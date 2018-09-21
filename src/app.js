var mongoose=require('mongoose');
var employee=require('../model/employee');

before(function(done){
    mongoose.connect('mongodb://127.0.0.1:27017/sampledb', { useNewUrlParser: true });
    
    mongoose.connection.once('open',function(error){
        if(error){
            cosole.log(error);
        }
        console.log('DB connected');
        done();
    });

});


