/*
 *Module:
 *      Handle publishin questions from user
 */


var con = require('./../config'); // database connection module

module.exports.publish=function(req, res){
	var today = new Date();
	var group = req.body.group;
	var category = req.body.category;
	var question_title = req.body.title;
	var question_content = req.body.content;
	var insertedId = -5;


	// To do: check if group and category are in database

	var sql = 'INSERT INTO questions(title, content, created_at, updated_at) values (?, ?, ?, ?)';


	con.query(sql, [question_title, question_content, today, today], function(err, result){
		if(err){
			console.log("Error inserting question");
			throw err;
		}
		else{
			insertedId = result.insertId;
			sql = 'INSERT INTO question_category_group(question_id, category_name, group_name) values (?, ?, ?)';

        		console.log("id after inserting:" + insertedId);
        		con.query(sql, [insertedId, category, group], function(err, result){
                		if(err){
                        		console.log("Error inserting question_id, category_name, group_name");
                        		throw err;
                		}
       			});
			res.json({
				status:true,
				message:" Succesfully published"
			});
		}
	});
}
