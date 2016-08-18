(function() {

var app = angular.module('app', []);

app.controller('SidebarController', function($scope) {
    $scope.state = true;
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
});

app.directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('isOpen'); 
                    return;
                  }
                    element.removeClass('isOpen');
            });
        }
    };
});  

}())