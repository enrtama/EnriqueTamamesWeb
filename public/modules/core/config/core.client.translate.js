'use strict';

var translationsES = {
	TITLE: 'Hola',
	TEXT: 'Esto es un parrafo.',
	BUTTON_LANG_EN: 'ingles',
	BUTTON_LANG_ES: 'español'
};

var translationsEN = {
	TITLE: 'Hello',
	TEXT: 'This is a paragraph.',
	BUTTON_LANG_EN: 'english',
	BUTTON_LANG_ES: 'spanish'
};

// Setting up translation
angular.module('core').config(['$translateProvider',
	function($translateProvider) {
		// Translation settings
		$translateProvider
			.translations('en', translationsEN)
			.translations('es', translationsES)
			.preferredLanguage('en')
			.fallbackLanguage('en');
	}
]);