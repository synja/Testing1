// myapp module
// var name does not need to match module name
// [] empty array of modules (dependencies)
// update 2014 04 25 16:56 ['ngRoute'] 
// update 2014 04 29 13:09 ['ngRoute','app.angularGit'] 
// myapp used with data-ng-app directive in html file

var myapp = angular.module('myapp',['ngRoute','app.angularGit']);

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
   
   //$locationProvider.html5Mode(true);
   //$locationProvider.hashPrefix('!');
                  
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

controllers.Ctrl3 = function($scope,$http) {
  $scope.getFromAPI = function() {
    $http.get('https://api.github.com/users/synja')
      .success(function(data, status, headers, config){
        // success
        console.log('success',status)
        console.log(data)
        $scope.mydata = data;
      })
      .error(function(data, status, headers, config){
        // error
        console.log('error!',status)
        console.log(data)
      })
  }
};

controllers.Ctrl3b = function($scope,$http) {
  $scope.getFromAPI = function() {
    $http.get('https://pybottle.azurewebsites.net/json1')
      .success(function(data, status, headers, config){
        // success
        console.log('success',status)
        console.log(data)
        $scope.mydata = data;
      })
      .error(function(data, status, headers, config){
        // error
        console.log('error!',status)
        console.log(data)
        $scope.mydata = data;
      })
  }
};


//module AngularGit injected
controllers.Ctrl4 = function($scope,AngularGit) {
  
  //individual commit
  var params = {category: 'commits', sha: '92e8289c12e32a9eccaee204ff5f4683205fe1cf'}
  console.log(AngularGit.get(params));

  //array of commits
  //var params = {category: 'commits'}
  //console.log(AngularGit.query(params))
};


//=============================================
//============       modules       ============
//=============================================

angular.module('app.angularGit', ['ngResource'])
  .factory('AngularGit',function($resource) {
    return $resource('https://api.github.com/repos/angular/angular.js/:category/:sha/')
  })


myapp.controller(controllers);
