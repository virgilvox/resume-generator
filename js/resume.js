
var app = angular.module('MyApp', ['ngMaterial']);


app.controller('AppCtrl', function($scope,$mdSidenav) {


// it will say its not available but it would
// be when run in browser because json.js is included
// before app.js is loaded
$scope.sections = userData;


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

  var MESSAGE_SCHEMA = {
    "type": 'object',
    "properties": {
      "text": {
        "type": "string"
      }
    }
  };

  $scope.payload = function(data){
    $scope.displayText = data.payload.text;
    $scope.$apply()
  }

  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++)
  {
    if (query[i] === "")
    continue;
    var param = query[i].split("=");
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }

  // var conn = meshblu.createConnection({
  //   "uuid": GET.uuid,
  //   "token": GET.token
  // });

  // conn.on('ready', function(data){
  //   console.log('UUID AUTHENTICATED!');
  //   console.log(data);
  //   conn.update({
  //     "uuid": GET.uuid,
  //     "messageSchema": MESSAGE_SCHEMA
  //   });

  //   conn.on('message', function(data){
  //     $scope.payload(data);
  //   });

  // });

});

// angular.module('toolbarDemo1', ['ngMaterial'])
// .controller('AppCtrl2', function($scope) {
// });
