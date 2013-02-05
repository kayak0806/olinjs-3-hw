var Order = require('../models/models').Order;
var Ingredient = require('../models/models').Ingredient;



exports.list = function(req,res){
	var order = Order.find({}).populate('ingredients').exec(function (err,docs){
		if(err)
			return console.log("err",order);
		res.render('order',{Orders:docs,title:'all orders'});
	});
};


exports.new = function(req, res){
	var ingredient = Ingredient.find({}).exec(function (err,docs){
		res.render('orderNew',{Ingredients: docs, title:'New Order'});
	})
}

exports.create = function(req, res){

	console.log(req.body.ingredients);
	var newOrder = new Order({name:req.body.orderName,ingredients:req.body.ingredients})
	newOrder.save(function(err) {
		if (err)
			return console.log("derp",err);
		res.redirect('/orders');
	})
}

exports.delete = function(req, res){
	console.log(req.params.name);
	Order.where('name').equals(req.params.name).remove();
	res.redirect('/orders');
}

	

