(function(){

	"use strict";

	angular
		.module("StarterApp")
		.factory("classifiedsFactory", function($http, $firebaseArray){

			var ref= new Firebase('https://meeee-ce311.firebaseio.com/');
							
			return{
			ref: $firebaseArray(ref)
			//console.log('added record with id' + id);

					}
		});
})();