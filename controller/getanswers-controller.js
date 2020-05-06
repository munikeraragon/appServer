/*
 *Module:
 *      Handles retrieving of answers from a give question
 */

var con = require('./../config'); // database connection module

module.exports.answers=function(req, res){
	var questionId = req.body.id;

	// retrieve all answers for this question
	var sql = "select * from answers natural join( select answer_id as id from question_answer where question_id=?) as T1";

	con.query(sql, questionId, function(err, result){
		if(err) throw err;
		console.log(result);
		res.json(result);
	});
}




