(function(){

    "use strict";

    angular
         .module('StarterApp')
         .controller('AppCtrl', function($scope, $state,classifiedsFactory, $http,$mdSidenav,$mdToast,$mdDialog){

        //classifiedsFactory.getClassifieds().then(function(nilesh){ //the data is variable could be anyting as nilesh and nilesh.data is data extracted from variable
      // $scope.objects = nilesh.data;
       //$scope.categories = getcategories($scope.objects);
       $scope.objects= classifiedsFactory.ref;
       
       $scope.objects.$loaded().then(function(objects){
        $scope.categories=getcategories($scope.objects)
       });
    //});


 $scope.navi=function(){
     $mdSidenav('left').open();


 }
 $scope.clo=function(){
     $mdSidenav('left').close();
     
 }


 $scope.saveobjects1=function(objects1){
     if(objects1){
     $scope.objects.push(objects1);
     $scope.objects.$add(objects1);
     $scope.objects1={};
     display("saved");
     $scope.clo();
 }
}
$scope.editing=function(object){ //editclassified 
    var id= object.$id; //id var tskes id of current object
       $scope.object=$scope.objects.$getRecord(id);// so does thi
    $scope.value=true;
    $scope.navi();
    $scope.objects1 = $scope.object;//objects1 is ng-model
    $scope.objects.$save($scope.objects1);//objects1 now will havedats ehich will be passed to objects
    }


$scope.dele=function(event, object){ //this is how dialogue is made
    var confirm = $mdDialog.confirm()
    .title("plz don't kill me")
    .ok('fuck yeah')
    .cancel('leave it')
    .targetEvent(event); //after confirm only it will either delete orwill keep it
    $mdDialog.show(confirm).then(function() {
        $scope.objects.$remove(object); //only code required to delete the item
    }


)
};
    




$scope.finished=function(){ //saveEdit
    $scope.objects.$save($scope.object).then(function(){
    $scope.value=false;
    $scope.objects1={};
    display("finished editing");
    $scope.clo();
})
}


function display(mssg){
    $mdToast.show(
             $mdToast.simple()
             .content(mssg)
             .position('top, right')
             .hideDelay(3000)


         )
}


function getcategories(objects){
    var categories = [];
    angular.forEach(objects, function(item) //forEach is inbuilt angular function
    {
        angular.forEach(item.categories, function(category){
            categories.push(category);


        });
    });
    return _.uniq(categories);
}


/*var data = [
      {
        "id":"1",
        "title":"20 Foot Equipment Trailer",
        "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
        "price":6000,
        "posted":"2015-10-24",
        "contact": {
          "name":"John Doe",
          "phone":"(555) 555-5555",
          "email":"johndoe@gmail.com"
        },
        "categories":[
          "Vehicles",
          "Parts and Accessories"
        ],
        "image": "http://distillery-trailercentral.s3.amazonaws.com/cC5dWH/uNjbfE/2015_Gatormade_Trailers_2_series_equipment_trailer-_18ft_with_24_WIDE_ramps_14K_GVW_Equipment_Trailers_cFH8qU.jpg",
        "views":213
      },
      {
        "id":"2",
        "title":"Canada Goose Jacket",
        "description":"Red woman's Canada Goose Montebello jacket. It was used for two seasons. This jacket retails for $745. The jacket has been professionally cleaned since it was last worn by anyone.",
        "price": 500,
        "posted": "2015-10-28",
        "contact": {
          "name": "Jane Doe",
          "phone": "(555) 555-5555",
          "email": "janedoe@gmail.com"
        },
        "categories": [
          "Clothing"
        ],
        "image":"http://canadagoose-jacket.weebly.com/uploads/9/2/3/3/9233177/9087323_orig.jpg",
        "views": 422
      },
      {
        "id":"3",
        "title":"Baby Crib and Matress",
        "description":"Good condition.",
        "price":50,
        "posted":"2015-10-27",
        "contact": {
          "name":"Jane Doe",
          "phone":"(555) 555-5555",
          "email":"janedoe@gmail.com"
        },
        "categories":[
          "Furniture"
        ],
        "image":"http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Nat_V1/$web_setitem$/1308310657/andersen-crib-maple.jpg",
        "views":23
      },
      {
        "id":"4",
        "title":"Leather Sofa",
        "description":"Brown leather sofa for sale.  Good condition but small tear on one cushion.",
        "price":250,
        "posted":"2015-11-01",
        "contact": {
          "name":"John Doe",
          "phone":"(555) 555-5555",
          "email":"johndoe@gmail.com"
        },
        "categories":[
          "Furniture"
        ],
        "image":"http://www.onedaynever.com/wp-content/uploads/2016/08/tufted-leather-sofa.jpeg",
        "views":77
      },
      {
        "id":"5",
        "title":"MacBook Air",
        "description":"2013 MacBook Air. Great condition, but a few scratches.",
        "price":1150,
        "posted":"2015-11-02",
        "contact": {
          "name":"John Doe",
          "phone":"(555) 555-5555",
          "email":"johndoe@gmail.com"
        },
        "categories":[
          "Electronics",
          "Computer Parts and Accessories"
        ],
        "image":"http://img1.lesnumeriques.com/test/10/10559/mba-2.jpg",
        "views":889
      },
      {
        "id":"6",
        "title":"2008 Dodge Caliber",
        "description":"Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
        "price":4800,
        "posted":"2015-11-03",
        "contact": {
          "name":"John Doe",
          "phone":"(555) 555-5555",
          "email":"johndoe@gmail.com"
        },
        "categories":[
          "Vehicles",
          "Cars"
        ],
        "image":"http://images.buysellsearch.com/image/orig/8dfc4f6c5d411130d19dedd28d61bc2b/2009-dodge-caliber-se.jpg",
        "views":423
      }
]

var firebase = classifiedsFactory.ref;
angular.forEach(data, function(item){
    firebase.$add(item);
}); */ //for adding data to firebase from text/ jason file

});

})();


