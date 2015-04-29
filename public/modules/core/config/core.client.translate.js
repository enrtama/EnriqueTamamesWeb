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