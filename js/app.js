
var app = angular.module('MyApp',['ngMaterial','schemaForm']);

app.controller('AppCtrl', function($scope, $http) {

  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++)
  {
    if (query[i] === "")
    continue;
    var param = query[i].split("=");
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }


  var username = GET.username;
  var password = GET.password;

      //var body = "username=" + username + "&password=" + password;
      var body = {"username": username, "password": password};
      var req = {
        method: 'POST',
        url: 'http://fracture.cc:8070/login-user',
        headers: {'Content-Type': 'application/json'},
        data: body
      };

      $http(req).then(function successCallback(response) {
        if(response.data.resume != null || response.data.resume != undefined || response.data.resume != {}){
          $scope.model = response.data.resume;
        }else{
          $scope.model = {"expertise":[{"data":[],"expertiseType": ""}],"experience":[{"contents":[{"tags":[],"name":"","startEndYears":"","subtitle":"","description":""}],"expertiseType":""}],"education":{"relatedCoursework":[],"major":"","graduationYear":"","university":""},"firstName":"","lastName":"","contactInfo":{"email":"","phone":"","github":"","twitter":""}};
        }
        console.log($scope.model);
      }, function errorCallback(response) {
        console.log('err', response);
      });

  $scope.schema = {
    type: "object",
    properties: {
      firstName: {
        type: "string"
      },
      lastName: {
        type: "string"
      },
      picture: {
        type: "string"
      },
      expertise: {
        type: "array",
        items: {
          type: "object",
          properties: {
            expertiseType: { type: "string" },
            data: { type: "array", items: { type: "string" } }
          }
        }
      },
      experience: {
        type: "array",
        items: {
          type: "object",
          properties: {
            expertiseType: { type: "string" },
            contents: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string"},
                  startEndYears: { type: "string"},
                  subtitle: { type: "string"},
                  description: { type: "string"},
                  tags: { type: "array", items: { type: "string" } }
                }
              }
            }
          }
        }
      },
      education: {
        type: "object",
        properties: {
          major: { type: "string"},
          graduationYear: { type: "string"},
          university: { type: "string"},
          relatedCoursework: { type: "array", items: { type: "string" } }
        }
      },
      contactInfo: {
        type: "object",
        properties: {
          email: { type: "string"},
          phone: { type: "string"},
          github: { type: "string"},
          twitter: { type: "string"},
        }
      }

    }};

    $scope.form = ["*"];

    $scope.view = function(){
      window.location = "/resgen/resume.html?user=" + username;
    };

    $scope.save = function(){
      console.log($scope.model);
      $scope.modelString = JSON.stringify($scope.model);
      //var body = "username=" + username + "&password=" + password + "&resume=" + $scope.modelString;
      var body = {"username": username, "password": password, "resume": $scope.model};
      var req = {
        method: 'POST',
        url: 'http://fracture.cc:8070/update',
        headers: {'Content-Type': 'application/json'},
        data: body
      };

      $http(req).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log('err', response);
      });
    };


  });
