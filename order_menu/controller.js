app.controller('OrderMenuController', ['$scope', function($scope) {

  $scope.products = [
    {
      name: 'Latte',
      price: 3.5,
      active: false
    },
    {
      name: 'Epresso',
      price: 3.5,
      active: false
    },
    {
      name: 'Cappuccino',
      price: 3.5,
      active: false
    },
    {
      name: 'Mocha',
      price: 3.5,
      active: false
    },
    {
      name: 'Americano',
      price: 3.5,
      active: false
    }
  ];

  $scope.toggleActive = function(s){
    s.active = !s.active;
  }

  $scope.total = function(){

    var total = 0;

    angular.forEach($scope.products, function(s){
      if(s.active){
        total += s.price;
      }
    });
    return total;
  };
}]);
