//------------//------------//------------Angular------------//------------//------------//
(function(){
  var app = angular.module("ToDo", []);
  var boardRow = [
    { title : "title", toDoList : [] },

  ];

  //------------//------------//------------Controller's------------//------------//------------//
  //==>
  //------------//----------== todoController ==----------//------------//
  app.controller('todoController', ['$scope', function($scope){
    this.boards = boardRow;


    // showme = !showme;

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


//------------//------------//------------/Angular------------//------------//------------//
})();
