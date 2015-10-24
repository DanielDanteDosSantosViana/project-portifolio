/* APP */
var app = angular.module('portifolioApp', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider.when('/',
			{
				templateUrl:'partials/inicio.tpl.html',
				controller:'inicioController',
			});

	$routeProvider.when('/sobre',
			{
				templateUrl:'partials/sobre.tpl.html',
				controller:'sobreController',
			});

	$routeProvider.when('/projetos',
			{
				templateUrl:'partials/projetos.tpl.html',
				controller:'projetosController',
			});

	$routeProvider.otherwise({redirectTo:'/'});
	
});