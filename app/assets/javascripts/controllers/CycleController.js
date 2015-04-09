/*
 *   CycleController as cycleCtrl
 *   Description: Controller for Cycle section view
 * */

'use strict';

iuvare.controller('CycleController', ["$scope", "$rootScope", "AuthService", "CycleService", "DEFAULT_VALUES", function($scope, $rootScope, AuthService, CycleService, DEFAULT_VALUES){

    $scope.downlines = [];


    // Method to init the controller's default state
    $scope.initController = function(){

        $scope.$emit('setCurrentSection');

        // Obtenemos los downlines del usuario
        $scope.downlines = angular.copy(CycleService.getDownlines());

    };

    $scope.initController();

}]);