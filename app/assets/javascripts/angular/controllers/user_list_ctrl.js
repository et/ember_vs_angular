function UserListCtrl($scope, $http) {
  $http.get('/users.json').success(function(data) {
    //$scope.users = data; change for using a rooted element
    $scope.users = data.users;
  });
  $scope.orderProp = 'age';
}
