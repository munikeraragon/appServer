/*
 *Module:
 *      Handle publishin questions from user
 */


var con = require('./../config'); // database connection module

module.exports.publish=function(req, res){
        var today = new Date();
        var questionId = req.body.questionId
	var answerContent = req.body.content
	var insertedId = -5;
	
	// add 'answer' into answers relation
	var sql = 'INSERT INTO answers(content, created_at, updated_at) values (?, ?, ?)';

	con.query(sql, [answerContent, today, today], function(err, result){
		if(err){
                        console.log("Error inserting answer");
                        throw err;
                }
		else{
			insertedId = result.insertId;
			sql = 'INSERT INTO question_answer(question_id, answer_id, created_at, updated_at) values (?, ?, ?, ?)';
			con.query(sql, [questionId, insertedId, today, today], function(err, result){
				if(err){
					
                                        console.log("Error inserting question_id, answer_id");
                                        throw err;
                                }
			});
				res.json({
					status:true,
					message:"Succesfully published answer"
				});
			}

		});
	
}



