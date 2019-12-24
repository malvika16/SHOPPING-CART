var express=require('express');
var routes=require('routes');
var http=require('http');
var url=require('url');
var path=require('path');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var mysql=require('mysql');
app.set('port',process.env.port||4304);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get("/",function(req,res){
  res.render("ass");
});



var con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'ass'});


app.post('/signup', function(req, res, next) {

            var data = req.body;


    var params=[data.city,data.rollno,data.class];
    con.query('SELECT name FROM emp WHERE city = ? AND rollno = ? AND class=?',params, function(err, results) {
      if(err) throw err;
      res.render("info",{data:results});

    });
});
app.get('/name/:userId',function(req,res){
var sql="select * from emp where name='"+req.params.userId+"'";
console.log(sql);
con.query(sql,function(err,rows){
if(err) throw err;
res.render("info1",{dat:rows});
});
})
http.createServer(app).listen(app.get('port'),function(){
  console.log('express server is listening on port'+app.get('port'));
});
