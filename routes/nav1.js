var mysql=require('mysql');
exports.listm=function(req,res){
  var con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'ass'});
  var sql="select * from employee where name='malvika'";
  con.query(sql,function(err,rows)
  {
    if(err)
     throw err;
    res.render('info1',{data:rows});


  });
}
