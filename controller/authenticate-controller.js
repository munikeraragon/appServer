/*
 *Module:
 *      Handles user authentication
 */

var con = require('./../config'); // database connection module

module.exports.authenticate = function(req, res){
        var email = req.body.email;
        console.log("email:" + email);
        var password = req.body.password;
        console.log("pass" + password);
        // query user in database
        con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields){
                console.log("results:" + results.length);
                if(error){
                        res.json({
                                status:false,
                                message:'there are some errors with query'
                        })}

                else{ // succesful query
                        if(results.length > 0){
                                if(password == results[0].password){
                                        res.json({
                                                status:true,
                                                message:'successfully authenticated'
                                        })
					console.log('successfully authenticated');

                                }
                                else{
                                        res.json({
                                                status:false,
                                                message:" Email and password do not match"
                                        });
                                }
                        }
                        else{ // results = 0
                                res.json({
                                        status:false,
                                        message:"Email does not exist"
                                });
                        }
                }
        });
}

