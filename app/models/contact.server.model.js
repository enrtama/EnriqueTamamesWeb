'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
	username: {
		type: String,
		default: '',
		required: 'Please fill Contact name',
		trim: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your email'],
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	message: {
		type: String,
		default: '',
		required: 'Please fill message',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Contact', ContactSchema);