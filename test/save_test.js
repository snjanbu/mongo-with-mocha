var mocha=require('mocha');
var assert=require('assert');
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

beforeEach(function(done){
    mongoose.connection.collections.employees.drop(function(error){
        if(error){
            throw error;
        }
        done();
    });
});

describe('DB Save Functionality Test',function(){
    
    it('Saving Test',function(done){
        var record=new employee({employeeId:6100,employeeName:'Sanjay'});
        record.save(function(error,data){
            if(error){
                throw error;
            }
            assert(record.isNew===false);
            done();
        });
    });

});