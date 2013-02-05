//= require angular
//= require_tree ./controllers
//= require_tree ./filters
//= require_tree ./services
//= require_tree ./widgets

angular.module('app', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/users', { templateUrl: 'templates/angular/users-list.html', controller: UserListCtrl }).
      otherwise({ redirectTo: '/users' });
}]);
