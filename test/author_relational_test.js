var mongoose=require('mongoose');
var mocha=require('mocha');
var assert=require('assert');
var author=require('../model/author') 

describe('Relational DB test',function(){

    var record=new author({
        name:'Sanjay',
        age:22,
        books:[{
           title:'Book1',
           pages:20 
        }]
    });

    before(function(done){
        mongoose.connect('mongodb://127.0.0.1:27017/sampledb',{ useNewUrlParser: true });
        mongoose.connection.once('open',function(error){
            if(error){
                throw error;
            }
            console.log('DB Connected Successfully');
            done();
        });
    });

    it('Inserting a record test',function(done){
        record.save(function(error,data){
            if(error){
                throw error;
            }
            assert(data.books.length===1);
            done();
        });    
    });

    it('Updating Books',function(done){
        author.findOne({name:'Sanjay'},function(error,data){
            if(error){
                throw error;
            }
            if(data===null){
                console.log('No data present');
                done();
            }
            var book={title:'Book2',pages:30};
            data.books.push(book);
            data.save(function(error,data){
                if(error){
                    throw error;
                }
                assert(data.books.length===2);
                done();
            });
        });
    });
});

