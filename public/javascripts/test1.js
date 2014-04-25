// myapp module
// var name does not need to match module name
// [] empty array of modules (dependencies)
// update 2014 04 25 16:56 ['ngRoute'] 
// myapp used with data-ng-app directive in html file

var myapp = angular.module('myapp',['ngRoute']);


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

var controllers = {}

controllers.Ctrl1 = function($scope) {
  $scope.friends = ['Rod','Jane','Freddy'];
};

controllers.Ctrl2 = function($scope) {
  $scope.friends2 = [{name:'Rod', city:'Berlin'},
                     {name:'Rob', city:'London'},
                     {name:'Ron', city:'London'},
                     {name:'Jane', city:'Paris'},
                     {name:'Freddy', city:'Berlin'}];
};

myapp.controller(controllers);
