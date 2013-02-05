function UserListCtrl($scope, $http) {
  $http.get('/users.json').success(function(data) {
    $scope.users = data;
  });
  $scope.orderProp = 'age';
}
