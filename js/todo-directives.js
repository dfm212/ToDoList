(function(){
  var app = angular.module('todo-directives', []);

//------------//------------//------------Directive------------//------------//------------//
//==>boardsAndForms
//------------//----------== FileController ==----------//------------//
// app.directive("boardsAndForms", function() {
//   return {
//     restrict: 'E',
//     templateUrl: "templateHTML\boardsAndForms.html"
//   };
// });
//==>boards
//------------//----------== FileController ==----------//------------//
app.directive("boards", function() {
  return {
    restrict: 'E',
  // =====> P R O D U C T I O N
    templateUrl: "http://dfm212.github.io/ToDoList/templateHTML/boards.html"
  // =====> G I T H U B
    // templateUrl: "http://localhost/ToDoList/templateHTML/boards.html"
  };
});
//==>FormController
//------------//----------== FileController ==----------//------------//
// app.directive("FormController", function() {
//   return {
//     restrict: 'E',
//     templateUrl: "templateHTML\formController.html"
//   };
// });
})();
