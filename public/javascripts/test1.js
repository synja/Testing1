// myapp module
// var name does not need to match module name
// [] empty array of modules (dependencies)
// update 2014 04 25 16:56 ['ngRoute'] 
// myapp used with data-ng-app directive in html file

var myapp = angular.module('myapp',['ngRoute']);

//=============================================
//============       config        ============
//=============================================
//
//
myapp.config(function($routeProvider) {
   $routeProvider
   .when('/p1',{
     controller:'Ctrl1',
     templateUrl:'partials/view1.html'                   
   })   
   .when('/p2',{
     controller:'Ctrl1',
     templateUrl:'partials/view2.html'                   
   })
   .otherwise({redirectTo:'/'});                  
});

//=============================================
//============     factories       ============
//=============================================


//testfactory injected into Ctrl1 below
myapp.factory('testfactory', function(){
  var factory = {};
  var customers = ['one','two','three'];
  // var customers = [{name:'one'},{name:'two'},{name:'three'}];
  factory.getCustomers = function (){ return customers };
  return factory;
}); 


//=============================================
//============    controllers      ============
//=============================================


var controllers = {}

controllers.Ctrl1 = function($scope,testfactory) {
  $scope.friends = testfactory.getCustomers();
  // $scope.friends = ['Rod','Jane','Freddy'];
};

controllers.Ctrl2 = function($scope) {
  $scope.friends2 = [{name:'Rod', city:'Berlin'},
                     {name:'Rob', city:'London'},
                     {name:'Ron', city:'London'},
                     {name:'Jane', city:'Paris'},
                     {name:'Freddy', city:'Berlin'}];
};

myapp.controller(controllers);
