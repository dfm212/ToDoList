(function(){
  var app = angular.module('todo-directives', []);

//==>boardsAndForms
// app.directive("boardsAndForms", function() {
//   return {
//     restrict: 'E',
//     templateUrl: "templateHTML\boardsAndForms.html"
//   };
// });
//==>boards
app.directive("boards", function() {
  return {
    restrict: 'E',
  // =====> P R O D U C T I O N
    // templateUrl: "http://localhost/ToDoList/templateHTML/boards.html"
  // =====> G I T H U B
    templateUrl: "templateHTML\boards.html"
  };
});
//==>FormController
// app.directive("FormController", function() {
//   return {
//     restrict: 'E',
//     templateUrl: "templateHTML\formController.html"
//   };
// });
})();
