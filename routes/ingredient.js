var Ingredient = require('../models/models').Ingredient;



exports.list = function(req,res){
	var ingredient = Ingredient.find({}).exec(function (err,docs){
		if(err)
			return console.log("err",ingredient);
		res.render('ingredient',{Ingredients:docs,title:'all ingredients'});
	});
};

exports.new = function(req, res){
	res.render('ingNew',{title:'New ingredient'})
}
 
exports.create = function(req, res){
	
	var newIngredient = new Ingredient({name:req.body.ingName,price:req.body.ingPrice})
	newIngredient.save(function(err) {
		if (err)
			return console.log("err. the cheese stands alone");
		res.redirect('/ingredient');
	})
	
}
	

