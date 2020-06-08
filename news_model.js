var db=require('./dbconnection');
var news={
    getAllPerson:function(callback){
        return db.query("SELECT * FROM person_register;",callback); 
        }
};
module.exports=news;