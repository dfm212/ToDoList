//------------//------------//------------Angular------------//------------//------------//
(function(){
  var app = angular.module("IndexToDo", []);


  app.controller("WallController", function(){
    this.wall = {};

    // $scope.boardRow: {"="};

  });

  app.controller("BoardController", function(){
    this.boards = boardRow;
  });

  app.controller("FileController", function(){
    this.file = boardRow;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview  = function(todoFile){
        todoFile.toDoList.push(this.file);
      this.file = {};
    };
  });




  var boardRow = [
    { title : "title", toDoList : [] },
  ];





})();
