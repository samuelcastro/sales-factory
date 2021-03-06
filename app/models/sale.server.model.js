'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Sale Schema
 */
var SaleSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Client name',
		trim: true
	},
	cnpj: {
		type: String,
		default: '',
		required: 'Please fill CNPJ'
	},
	address: {
		type: String,
		default: '',
		required: 'Please fill ADDRESS'
	},
	products: {
		type: Array,
		required: 'Please fill Products'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Sale', SaleSchema);
