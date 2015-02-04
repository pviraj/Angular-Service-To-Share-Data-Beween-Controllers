var app = angular.module('plunker', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
		.when("/", {
			templateUrl: "page1.html",
			controller: "MainCtrl"
		})
		.when("/page2", {
			templateUrl: "page2.html",
			controller: "SecondCtrl"
		})
		// .otherwise({ redirectTo: '/'})
		;
}]);

app.controller('MainCtrl', function($scope, srvShareData, $location) {
  
  $scope.dataToShare = [];
  
  $scope.shareMyData = function (myValue) {

    $scope.dataToShare = myValue;
    srvShareData.addData($scope.dataToShare);
    
    $location.url('/page2');
  }
});

app.controller('SecondCtrl', function($scope, srvShareData) {
  
  $scope.sharedData = srvShareData.getData();

});

app.service('srvShareData', function() {
  var myData = [];

  var addData = function(newObj) {
      myData.push(newObj);
  }

  var getData = function(){
      return myData;
  }

  return {
    addData: addData,
    getData: getData
  };

});
