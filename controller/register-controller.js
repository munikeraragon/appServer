/*
 *Module:
 *      Handle user registration
 */

var con = require('./../config'); // database connection module

module.exports.register=function(req,res){
        var today = new Date();
        // retrieve user information
        var user={
                "name": req.body.name,
                "email": req.body.email,
                "password": req.body.password,
                "created_at": today,
                "updated_at": today
        }

        con.query('INSERT INTO users SET ?',user, function (error, results, fields) {
                if (error) {
                        console.log(error);
                        console.log(results);
                        res.json({
                        status:false,
                        message:'there are some error with query'
                })}
                else{
                        res.json({
                        status:true,
                        data:results,
                        message:'user registered sucessfully'
                        })
                 }
         });
}

