
  var GET = {};
  var userData;
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
    userData = response.data;
    console.log($scope.sections);
  }, function errorCallback(response) {
  });
