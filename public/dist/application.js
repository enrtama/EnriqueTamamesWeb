'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'enrtama';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils', 'duScroll', 'pascalprecht.translate', 'xeditable', 'toasty', 'ui.calendar', 'ui.sortable', 'ngFlag'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
'use strict';

// Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

// Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	// Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('contacts');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);
'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('createArticle', {
			url: '/articles/create',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'toasty', function($scope, $stateParams, $location, Authentication, Articles, toasty) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					toasty.pop.success({
						title: 'The article has been removed!',
						sound: false,
						showClose: true,
						clickToClose: false
					});
					$location.path('articles');
				});
			}
		};

		$scope.update = function(article) {
			article.$update(function() {
				toasty.pop.success({
					title: 'The article has been updated!',
					sound: false,
					showClose: true,
					clickToClose: false
				});
				$location.path('articles');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);
'use strict';

// Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('contacts').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Contacts', 'contacts', 'dropdown', '/contacts(/create)?');
		Menus.addSubMenuItem('topbar', 'contacts', 'List Contacts', 'contacts');
	}
]);
'use strict';

//Setting up route
angular.module('contacts').config(['$stateProvider',
	function($stateProvider) {
		// Contacts state routing
		$stateProvider.
		state('listContacts', {
			url: '/contacts',
			templateUrl: 'modules/contacts/views/list-contacts.client.view.html'
		}).
		state('createContact', {
			url: '/contacts/create',
			templateUrl: 'modules/contacts/views/create-contact.client.view.html'
		}).
		state('viewContact', {
			url: '/contacts/:contactId',
			templateUrl: 'modules/contacts/views/view-contact.client.view.html'
		}).
		state('editContact', {
			url: '/contacts/:contactId/edit',
			templateUrl: 'modules/contacts/views/edit-contact.client.view.html'
		});
	}
]);
'use strict';

// Contacts controller
angular.module('contacts').controller('ContactsController', ['$scope', '$stateParams', '$location', 'Authentication', '$modal', 'Contacts', '$log', 'toasty', function($scope, $stateParams, $location, Authentication, $modal, Contacts, $log, toasty) {
		$scope.authentication = Authentication;

		// Create new Contact
		$scope.create = function() {
			// Create new Contact object
			var contact = new Contacts ({
				name: this.name
			});

			// Redirect after save
			contact.$save(function(response) {
				$location.path('contacts/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Contact
		$scope.remove = function(contact) {
			if ( contact ) { 
				
				var modalInstance = $modal.open({
					templateUrl: 'modules/core/views/modal.client.view.html',
					controller: 'ModalInstanceController',
					resolve: {
						content: function () {
							return {
								header: 'Delete contact',
								body: 'Are you sure you want to delete?',
								object: contact
							};
						}
					}
				});

				modalInstance.result.then(function () {
					contact.$remove();
					for (var i in $scope.contacts) {
						if ($scope.contacts [i] === contact) {
							$scope.contacts.splice(i, 1);
						}
					}
					toasty.pop.success({
						title: 'The contact has been deleted!',
						sound: false,
						showClose: true,
						clickToClose: false
					});
				}, function () {
				});
			} else {
				$scope.contact.$remove(function() {
					$location.path('contacts');
				});
			}
		};

		// Update existing Contact
		$scope.update = function(contact) {
			contact.$update(function() {
				toasty.pop.success({
					title: 'The contact has been updated!',
					sound: false,
					showClose: true,
					clickToClose: false
				});
				$location.path('contacts');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Contacts
		$scope.find = function() {
			$scope.contacts = Contacts.query();
		};

		// Find existing Contact
		$scope.findOne = function() {
			$scope.contact = Contacts.get({ 
				contactId: $stateParams.contactId
			});
		};
	}
]);
'use strict';

//Contacts service used to communicate Contacts REST endpoints
angular.module('contacts').factory('Contacts', ['$resource',
	function($resource) {
		return $resource('contacts/:contactId', { contactId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('calendar', {
			url: '/calendar',
			templateUrl: 'modules/core/views/calendar.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);
'use strict';

var translationsES = {
	ARTICLES: 'Artículos',
	CONTACTS: 'Contactos',
	CALENDAR: 'Calendario',
	PROFILE: 'Editar Perfil',
	SOCIAL_ACCOUNTS: 'Redes Sociales',
	CHANGE_PASSWORD: 'Cambiar Password',
	SIGNIN: 'Entrar',
	SIGNOUT: 'Salir',
	MENU_ABOUT: 'Sobre Mí',
	MENU_PROJECTS: 'Proyectos',
	MENU_CONTACT: 'Contacto',
	SELF_DESCRIPTION1: 'Soy español y tengo 25 años.',
	SELF_DESCRIPTION2: 'Actualmente vivo en Amsterdam y trabajo como desarrollador Frontend y Backend.',
	FRONTEND: 'Frontend',
	BACKEND: 'Backend',
	DATABASE: 'Base de Datos',
	PROJECTS_LAYERGLOSS: 'Plataforma basada en el concepto de Drag, Drop & Publish. Con esta herramienta es muy fácil la creación de apps tanto para iOS como para Android en cuestión de minutos, en vez de días y por un precio mucho mas reducido. Combinamos la facilidad de uso con la rapidez de creación.',
	PROJECTS_MARIATAMAMES: 'Página web personal de la diseñadora Maria Tamames.',
	PROJECTS_XGEN: 'XGen es un sistema de generación dinámica de formularios atendiendo a los estándares de XFORMS. El usuario puede construir sus propios formularios, crear nuevos campos y editarlos de una forma muy fácil (WYSUWYG)', 
	PROJECTS_DKT: 'Página web personal de la peña DKT.',
	PROJECTS_PINAPARDO: 'Es una proyecto textil y de moda dedicado a la artesanía, collage y proyectos visuales. PINAPARDO nació en el seno del núcleo con preguntas y preocupaciones. Llega antes de la necesidad para encontrar respuestas. Es una forma de expresión personal.',
	PROJECTS_ELVIRA: 'Fisioterapia usando técnicas manuales e instrumentos físicos para mejorar tu calidad de vida.',
	USERNAME: 'Usuario',
	PASSWORD: 'Contraseña',
	EMAIL: 'Correo electrónico',
	MESSAGE: 'Mensaje',
	FOOTER: '2015 Enrique Tamames. Todos los derechos reservados',
	SEND_BUTTON: 'Enviar'
};

var translationsEN = {
	ARTICLES: 'Articles',
	CONTACTS: 'Contacts',
	CALENDAR: 'Calendar',
	PROFILE: 'Edit profile',
	SOCIAL_ACCOUNTS: 'Manage Social Accounts',
	CHANGE_PASSWORD: 'Change Password',
	SIGNIN: 'Signin',
	SIGNOUT: 'Signout',
	MENU_ABOUT: 'About',
	MENU_PROJECTS: 'Projects',
	MENU_CONTACT: 'Contact',
	SELF_DESCRIPTION1: 'I\'m spanish and I\'m 25 years old.',
	SELF_DESCRIPTION2: 'Currently living in Amsterdam and working as both Frontend & Backend developer.',
	FRONTEND: 'Frontend',
	BACKEND: 'Backend',
	DATABASE: 'Database',
	PROJECTS_LAYERGLOSS: 'App production platform based on the concept of Drag, Drop and Publish. With this tool it\'s very easy to create apps for the Apple iOs platform in minutes, instead of days and at a fraction of the cost that others charge. We combine easy to use with fast to create.',
	PROJECTS_MARIATAMAMES: 'Personal website of Maria Tamames, fashion designer.',
	PROJECTS_XGEN: 'XGen is a system which manages the generation of dynamic forms according to the XFORMS specification. The user can build his own forms, create new fields & edit them in a easy way (WYSIWYG).',
	PROJECTS_DKT: 'Página web personal de la peña DKT.',
	PROJECTS_PINAPARDO: 'PINAPARDO is a Slow Fashion&Textile Crafts, collage and visuals project. PINAPARDO was born in the bosom of a core fulfilled with worries and questions. It arises before the imminent need to find the answers. A way of personal expression.',
	PROJECTS_ELVIRA: 'Physiotherapy by using manual techniques and phisical instruments in order to improve your quality of live.',
	USERNAME: 'Username',
	PASSWORD: 'Password',
	EMAIL: 'Email',
	MESSAGE: 'Message',
	FOOTER: '2015 Enrique Tamames. All Rights Reserved',
	SEND_BUTTON: 'Send'
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
'use strict';

angular.module('core').controller('CalendarController', ['$scope', '$compile', 'uiCalendarConfig', function($scope, $compile, uiCalendarCtrl) {
		// Calendar controller logic
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		$scope.changeTo = 'Hungarian';
		/* event source that pulls from google.com */
		$scope.eventSource = {
		        url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
		        className: 'gcal-event',           // an option!
		        currentTimezone: 'America/Chicago' // an option!
		};
		/* event source that contains custom events on the scope */
		$scope.events = [
		  {title: 'All Day Event',start: new Date(y, m, 1)},
		  {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
		  {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
		  {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
		  {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
		  {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
		];
		/* event source that calls a function on every view switch */
		$scope.eventsF = function (start, end, timezone, callback) {
		  var s = new Date(start).getTime() / 1000;
		  var e = new Date(end).getTime() / 1000;
		  var m = new Date(start).getMonth();
		  var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
		  callback(events);
		};

		$scope.calEventsExt = {
		   color: '#f00',
		   textColor: 'yellow',
		   events: [ 
		      {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
		      {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
		      {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
		    ]
		};
		/* alert on eventClick */
		$scope.alertOnEventClick = function( date, jsEvent, view){
		    $scope.alertMessage = (date.title + ' was clicked ');
		};
		/* alert on Drop */
		 $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
		   $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
		};
		/* alert on Resize */
		$scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
		   $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
		};
		/* add and removes an event source of choice */
		$scope.addRemoveEventSource = function(sources,source) {
		  var canAdd = 0;
		  angular.forEach(sources,function(value, key){
		    if(sources[key] === source){
		      sources.splice(key,1);
		      canAdd = 1;
		    }
		  });
		  if(canAdd === 0){
		    sources.push(source);
		  }
		};
		/* add custom event*/
		$scope.addEvent = function() {
		  $scope.events.push({
		    title: 'Open Sesame',
		    start: new Date(y, m, 28),
		    end: new Date(y, m, 29),
		    className: ['openSesame']
		  });
		};
		/* remove event */
		$scope.remove = function(index) {
		  $scope.events.splice(index,1);
		};
		/* Change View */
		$scope.changeView = function(view,calendar) {
		  uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
		};
		/* Change View */
		$scope.renderCalender = function(calendar) {
		  if(uiCalendarConfig.calendars[calendar]){
		    uiCalendarConfig.calendars[calendar].fullCalendar('render');
		  }
		};
		 /* Render Tooltip */
		$scope.eventRender = function( event, element, view ) { 
		    element.attr({'tooltip': event.title,
		                 'tooltip-append-to-body': true});
		    $compile(element)($scope);
		};
		/* config object */
		$scope.uiConfig = {
		  calendar:{
		    height: 450,
		    editable: true,
		    header:{
		      left: 'title',
		      center: '',
		      right: 'today prev,next'
		    },
		    eventClick: $scope.alertOnEventClick,
		    eventDrop: $scope.alertOnDrop,
		    eventResize: $scope.alertOnResize,
		    eventRender: $scope.eventRender
		  }
		};

		$scope.changeLang = function() {
		  if($scope.changeTo === 'Hungarian'){
		    $scope.uiConfig.calendar.dayNames = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
		    $scope.uiConfig.calendar.dayNamesShort = ['Vas', 'Hét', 'Kedd', 'Sze', 'Csüt', 'Pén', 'Szo'];
		    $scope.changeTo= 'English';
		  } else {
		    $scope.uiConfig.calendar.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		    $scope.uiConfig.calendar.dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		    $scope.changeTo = 'Hungarian';
		  }
		};
		/* event sources array*/
		$scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
		$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
		$scope.eventSources = [$scope.events];

	}
]);
'use strict';

angular.module('core').controller('FooterController', ['$scope', function($scope) {
		// Footer controller logic
		// ...
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);
'use strict';

angular.module('core')
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 30)
	.controller('HomeController', ['$scope', 'Authentication', '$log', '$translate', function($scope, Authentication, $log, $translate) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.sections = angular.element($('.section').css('height', window.screen.availHeight));
		$scope.myInterval = 2000;
		$scope.alerts = [
			{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
			{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		];
		$scope.user = {
			name: 'awesome user'
		}; 

		// Translation settings
		$scope.changeLanguage = function (e, language) {
			$translate.use(language);
			var current = angular.element(e.currentTarget);
			var languageOptions = angular.element($('.flag'));
			angular.forEach(languageOptions, function(option) {
				var element = angular.element(option);
				if (element.hasClass('selected')) {
					element.removeClass('selected');
					element.addClass('unselected');
				}
			});
			current.addClass('selected');
		};

		$translate(['TITLE', 'TEXT', 'BUTTON_LANG_EN', 'BUTTON_LANG_ES']).then(function (translations) {
			$scope.title = translations.TITLE;
			$scope.text = translations.TEXT;
			$scope.buttonEnglish = translations.BUTTON_LANG_EN;
			$scope.buttonSpanish = translations.BUTTON_LANG_ES;
		});

		// Sortable example
		var i;
		$scope.itemsList = {
			items1: [],
			items2: []
		};

		for (i = 0; i <= 5; i += 1) {
			$scope.itemsList.items1.push({'Id': i, 'Label': 'Item ' + i});
		}

		for (i = 0; i <= 5; i += 1) {
			$scope.itemsList.items2.push({'Id': i, 'Label': 'Item 2_' + i});
		}
		$scope.sortableOptions = {
			containment: '#sortable-container',
			//restrict move across columns. move only within column.
			accept: function (sourceItemHandleScope, destSortableScope) {
			  return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
			}
		};
	}
]);

angular.module('core')
	.controller('SubmitController', ['$scope', '$http', '$location', 'Authentication', '$translate', 'Contacts', 'toasty',
		function($scope, $http, $location, Authentication, translate, Contacts, toasty) {

			$scope.submit = function(form) {
				// HTTP post
				var contact = new Contacts({
					username: $scope.contact.username,
					email: $scope.contact.email,
					message: $scope.contact.message
				});
				contact.$save(function(response) {
					toasty.pop.success({
						title: 'Your message has been sent successfully!',
						sound: false,
						showClose: true,
						clickToClose: false
					});
					$scope.username = '';
					$scope.email = '';
					$scope.message = '';
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});
			};
	}
]);

angular.module('core')
	.run(["editableOptions", function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
	}]
);

'use strict';

angular.module('core')
	.controller('ModalInstanceController', ['$scope', '$modalInstance', 'content',  function($scope, $modalInstance, content) {
		$scope.header = content.header;
		$scope.body = content.body;
		$scope.object = content.object;

		$scope.ok = function () {
			$modalInstance.close();
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}
]);
'use strict';

// Menu service used for managing menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication', function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication', function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);