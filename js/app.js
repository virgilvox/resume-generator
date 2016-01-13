
var app = angular.module('MyApp',['ngMaterial','schemaForm']);

app.controller('AppCtrl', function($scope) {

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

    $scope.model = {};

    $scope.display = function(){
      console.log($scope.model);
      $scope.modelString = JSON.stringify($scope.model);
    };

    // initialize with at least something
    $scope.displayText = "Hello World";
/*
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

    var conn = meshblu.createConnection({
      "uuid": GET.uuid,
      "token": GET.token
    });

    conn.on('ready', function(data){
      console.log('UUID AUTHENTICATED!');
      console.log(data);
      conn.update({
        "uuid": GET.uuid,
        "messageSchema": MESSAGE_SCHEMA
      });

      conn.on('message', function(data){
        $scope.payload(data);
      });


      $scope.sendMessage = function(){
        var message = {
          "devices": "*",
          "payload": {
            "ngclickEvent": true
          }
        };
        conn.message(message);
    });


*/
  });
