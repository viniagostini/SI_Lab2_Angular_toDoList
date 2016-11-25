angular.module('toDoList').controller('toDoListCtlr', ['$scope' , function($scope) {

  $scope.title = "To Do List";

  function Task (id, title){
    this.id = id;
    this.title = title;
    this.createdAt = new Date();
    this.isDone = false;
  }

  $scope.tasks = [];

  function fillTasks(){
    var task1 = new Task($scope.tasks.length, "Comemorar titulo do Palmeiras");
    $scope.tasks.push(task1);
    var task2 = new Task($scope.tasks.length, "Segunda task");
    $scope.tasks.push(task2);
  }

  $scope.createTask = function(title){
    $scope.tasks.push( new Task($scope.tasks.length, title) );
    $scope.newTaskTitle = '';
  }

  $scope.defineStyle = function(isDone){
    if(isDone){
      return 'line-through';
    }
  }

  $scope.deleteTask = function(id){
      $scope.tasks.splice( id, 1 );
  }


  fillTasks();


}]);

'use strict';