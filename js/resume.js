
var app = angular.module('MyApp', ['ngMaterial']);


app.controller('AppCtrl', function($scope,$mdSidenav,$http) {

  $scope.profileImage ="images/profilePicture.png"

  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++)
  {
    if (query[i] === "")
    continue;
    var param = query[i].split("=");
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }

  var url = 'http://fracture.cc:8070/resume/' + GET.user;
  $http({
    method: 'GET',
    url: url
  }).then(function successCallback(response) {
    $scope.sections = response.data;
    $scope.profileImage = response.data.picture;
    console.log($scope.sections);
  }, function errorCallback(response) {
  });



  // toggle opening and closing of sidebar
  $scope.toggle = function() {
    $mdSidenav('left').toggle();
  };

  // Async open the given sidenav
  $scope.open = function(){
    $mdSidenav('left').open();
  };

  // Async close the given sidenav
  $scope.close = function(){
    $mdSidenav('left').close();
  };


});
