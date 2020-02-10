var con = require('./../config');



module.exports.register=function(req,res){
	var today = new Date();
    var users={
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    }
	console.log(req.body.name);
	console.log(req.body.email);
	console.log(req.body.password);
	//var sql = "INSERT INTO customers (name, email, password, created ati) VALUES (
    con.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
	      console.log(error);
	      console.log(results);
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
