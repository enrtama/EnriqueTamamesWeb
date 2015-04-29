'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Contact = mongoose.model('Contact');

/**
 * Globals
 */
var contact;

/**
 * Unit tests
 */
describe('Contact Model Unit Tests:', function() {
	beforeEach(function(done) {
		contact = new Contact({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		done();
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return contact.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			contact.name = '';

			return contact.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Contact.remove().exec();

		done();
	});
});