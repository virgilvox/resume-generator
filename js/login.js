
var app = angular.module('MyApp',['ngMaterial','schemaForm']);

app.controller('AppCtrl', function($scope,$http) {

  $scope.schema = {
    type: "object",
    properties: {
      username: {
        type: "string"
      },
      password: {
        type: "string"
      }
    }};

    $scope.form = ["*"];

    $scope.model = {};

    $scope.login = function(){
      var body = "username=" + $scope.model.username + "&" + "password=" + $scope.model.password;
      var req = {
        method: 'POST',
        url: 'http://127.0.0.1:8070/login-user',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: body
      };

      $http(req).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log('err', response);
      });
    };
  });
