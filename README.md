# Angular Service To Share Data Between Controllers
=============================
This is a simple AngularJS service to to share data between Controllers.

* Add the service below to your project
* Push data into the service via srvShareData.addData($scope.yourDataToShare);
* Get data out of the service via $scope.sharedData = srvShareData.getData();
* View the example project here: http://plnkr.co/edit/6NRzoJxmQvDvF8YQgPoT?p=preview

## Service to get and retrieve data

  <code>
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
  </code>
