/*
 *Module:
 *      Handles retrieving of questions from the database
 */

var con = require('./../config'); // database connection module

module.exports.questions=function(req, res){
        var today = new Date();
	var group = req.body.group;
	var category = req.body.category;

	console.log("group:" + group + "    category:" + category);

	// query questions related to that group and category
	var sql = 'select * from questions natural join( select question_id as id from question_category_group where category_name = ? and group_name = ?) as T1';
	console.log(sql);
	con.query(sql, [category, group], function (err, result){
		if (err) throw err;
  		console.log(result);
		res.json(result);
		});

}
