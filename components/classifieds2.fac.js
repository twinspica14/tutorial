(function(){

	"use strict";

	angular
		.module("StarterApp")
		.factory("classifiedsFactory2", function($http, $firebaseArray){

			var ref= new Firebase('https://fruits-c1fb2.firebaseio.com/');
							
			return{
			ref: $firebaseArray(ref)
			//console.log('added record with id' + id);

					}
		});
})();