// Initialize Product model
const { Schema } = require('mongoose');

// sets up fields for Product model and defines columns
const productSchema = new Schema({
	productName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
    required: true,
    default: 10,
	},
});

module.exports = productSchema;
