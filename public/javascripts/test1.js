// myapp module
// var name does not need to match module name
// [] empty array of modules (dependencies)
// myapp used with data-ng-app directive in html file

var myapp = angular.module('myapp',[]);

myapp.controller('Ctrl1',function($scope) {
        $scope.friends = ['Rod','Jane','Freddy'];
});

myapp.controller('Ctrl2',function($scope) {
        $scope.friends2 = [{name:'Rod', city:'Berlin'},
                           {name:'Rob', city:'London'},
                           {name:'Ron', city:'London'},
                           {name:'Jane', city:'Paris'},
                           {name:'Freddy', city:'Berlin'}];
});
