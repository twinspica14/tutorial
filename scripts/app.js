
angular
	.module("StarterApp",["ngMaterial", 'ui.router', 'firebase'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('classifieds', {
				url: '/classifieds',
				templateUrl: 'components/classifieds/classifieds.tpl.html',
				controller: 'AppCtrl'
				
			})
			.state('classifieds2', {
				url: '/classifieds2',
				templateUrl: 'components/classifieds/classifieds2.tpl.html',
				controller: 'AppCtrl2'
				
			})

		$urlRouterProvider.otherwise('classifieds');
	});