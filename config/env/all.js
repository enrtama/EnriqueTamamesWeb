'use strict';

module.exports = {
	app: {
		title: 'enrtama',
		description: 'Personal website of Enrique Tamames, Web Developer',
		keywords: 'Web Development, Frontend, Backend, Javascript, NodeJS, AngularJS, MongoDB, ExpressJS'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/jquery-ui/ui/jquery-ui.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-scroll/angular-scroll.js',
				'public/lib/angular-xeditable/dist/js/xeditable.js',
				'public/lib/angular-translate/angular-translate.js',
				'public/lib/angular-toasty/js/ng-toasty.js',
				'public/lib/angular-ui-calendar/src/calendar.js',
				'public/lib/fullcalendar/fullcalendar.js',
				'public/lib/fullcalendar/gcal.js',
				'public/lib/ng-sortable/dist/ng-sortable.js',
				'public/lib/ng-flags/src/directives/ng-flags.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};