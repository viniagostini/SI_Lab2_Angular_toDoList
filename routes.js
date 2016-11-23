angular.module('toDoList')

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/components'});

    $routeProvider.when('/components', {
        templateUrl: 'components/toDoList/toDoList.html',
        controller: 'toDoListCtlr'
    });

}])