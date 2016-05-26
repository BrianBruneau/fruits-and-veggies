/* setup your angular app here */

//debug stuff to show the app is loading and fruit / veggies are available
var app = angular.module('MyApp', []);
app.controller("HomeCtrl", ['$scope', function($scope){

$scope.myClassName = false;
$scope.fruits = [];
$scope.vegmasters = [];
 
$scope.fleshies = fruit.concat(vegetables);
$scope.fruit = fruit.sort();
$scope.vegetables = vegetables.sort();


$scope.fruitPath = function(flesh) {
  if ($scope.fleshies.length > 0) {
    var index = $scope.fleshies.indexOf(flesh);
    if (index > -1) {
      $scope.fleshies.splice(index, 1);
    }
    $scope.fruits.push(flesh)
    $scope.isThisFruit(flesh);
  }
  
  if ($scope.fleshies.length <= 0) {
    console.log("DONE")

  }
}

$scope.veggiePath = function(flesh) {
  if ($scope.fleshies.length > 0) {
    var index = $scope.fleshies.indexOf(flesh);
    if (index > -1) {
      $scope.fleshies.splice(index, 1);
    }
    $scope.vegmasters.push(flesh);
    $scope.isThisVeggie(flesh);
    
  }

  if ($scope.fleshies.length <= 0) {
    console.log("DONE")
  }
}

$scope.isThisFruit = function(flesh) {
 if ($scope.fruit.indexOf(flesh) > -1) {
  return true;
 } else if ($scope.fruit.indexOf(flesh) == -1) {
  return false;
 }
}

$scope.isThisVeggie = function(flesh) {
 if ($scope.vegetables.indexOf(flesh) > -1) {
  return true;
 } else if ($scope.vegetables.indexOf(flesh) == -1) {
  return false;
 }
}

console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

}]);