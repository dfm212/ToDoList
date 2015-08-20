//------------//------------//------------Angular------------//------------//------------//
(function(){
  var app = angular.module("ToDo", ['todo-directives']);//
  var boardRow = [ { title : "Hello World!", toDoList : [] }, ];

  //------------//------------//------------Controller's------------//------------//------------//
  //==>
  //------------//----------== todoController ==----------//------------//
  app.controller('todoController', ['$scope', function($scope){
    this.boards = boardRow;

    // insert a new folder
    $scope.addNewFolder = function(){
      boardRow.push( { title : "Insert Title", toDoList : [] } );
    };

    // deleted current project in folder
    // =========>
    // is not working
    // =========>

  }]);
  //==>
  //------------//----------== FormController ==----------//------------//
  app.controller("FormController", function(){
    this.file = {};

    this.addFile  = function(todoFile){
        todoFile.toDoList.push(this.file);
        this.file = {};
    };
  });

  //==>
  //------------//----------== FileController ==----------//------------//
  app.controller("FileController", function(){
    this.file = boardRow;
  });

  //------------//------------//------------/Controller------------//------------//------------//
  //------------//------------//------------Directive------------//------------//------------//
  //==>boardsAndForms
  //------------//----------== FileController ==----------//------------//
  // app.directive("boardsAndForms", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "boardsAndForms.html"
  //   };
  // });
  //==>boards
  //------------//----------== FileController ==----------//------------//
  // app.directive("boards", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "http://localhost/ToDoList/templateHTML/boards.html"
  //   };
  // });
  //==>FormController
  //------------//----------== FileController ==----------//------------//
  // app.directive("FormController", function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: "FormController.html"
  //   };
  // });




//------------//------------//------------/Angular------------//------------//------------//
})();
