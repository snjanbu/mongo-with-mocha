var mocha=require('mocha');
var mongoose=require('mongoose');
var assert=require('assert');
var employee=require('../model/employee');

describe('Search Test',function(){
    
    var record;

    before(function(done){
        mongoose.connect('mongodb://127.0.0.1:27017/sampledb', { useNewUrlParser: true });
        
        mongoose.connection.once('open',function(error){
            if(error){
                cosole.log(error);
            }
            done();
        });
    
    });
    
    beforeEach(function(done){
        record=new employee({employeeId:6100,employeeName:'Sanjay'});
        record.save(function(error,data){
            if(error){
                throw error;
            }
            assert(record.isNew===false);
            done();
        });
    });

    it('findOne Test',function(done){
        employee.findOne({employeeId:6100},function(error,data){
            if(error){
                throw error;
            }
            assert(data.employeeId===6100);
            done();
        })
    });

    it('findById Test',function(done){
        employee.findOne({_id:record.id},function(error,data){
            if(error){
                throw error;
            }
            assert(data.id.toString()===record.id.toString());
            done();
        })
    });
});
