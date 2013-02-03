var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
  name: String,
  price: Number
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);


var orderSchema = mongoose.Schema({
	name: String,
	ingredients : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Order = mongoose.model('Order', orderSchema);

module.exports.Order = Order;
module.exports.Ingredient = Ingredient;