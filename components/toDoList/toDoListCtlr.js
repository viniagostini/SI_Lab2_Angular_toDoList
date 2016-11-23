angular.module('toDoList').controller('toDoListCtlr', ['$scope' , function($scope) {

  $scope.title = "To Do List";

  function Task (title){
    this.title = title;
    this.createdAt = new Date();
    this.isDone = false;
  }

  $scope.tasks = [];

  function fillTasks(){
    var task1 = new Task("Primeira task");
    var task2 = new Task("Segunda task");

    $scope.tasks.push(task1);
    $scope.tasks.push(task2);
  }

  $scope.createTask = function(title){
    $scope.tasks.push( new Task(title) );
    $scope.newTaskTitle = '';
  }
  
  fillTasks();


}]);

'use strict';
