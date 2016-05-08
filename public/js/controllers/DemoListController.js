'use strict';

// create the module 
var myCtrlModule = angular.module('DemoListControllerModule', []);


myCtrlModule.controller('DemoListController', ['$scope', 'restDemoListRESTCalls',
    function ($scope, restDemoListRESTCalls) {


        /**
         * myCtrlModule.controller('DemoListController', ['$scope',
         * function($scope) {
*/


        $scope.callbackObject = {

            // set the dependecy as we requested
            setButtonCall: function (param) {

                this.buttonCall = param;
            },
            // empty place holder for the function
            buttonCall: function () {
            },

            setRestCall: function (param) {

                this.restCall = param;
            },

            restCall: function () {
            }

        };

        // do something
        $scope.value = 12;
        $scope.callresult = 0;
        $scope.restresult = 0;
        $scope.increment = 2;

        $scope.increase = function () {
            $scope.callresult = $scope.value * $scope.increment;

        };

        $scope.callbackObject.setButtonCall($scope.increase);

        $scope.callbackObject.setRestCall(restDemoListRESTCalls.get);

        $scope.demoline = 'Greatings Laszlo from the web via Angular ';


        $scope.restCall = function () {
            // restDemoListRESTCalls.get( {demoID:1234}, function (resp) {
            $scope.callbackObject.restCall({demoID: 1234}, function (resp) {
                // restDemoListRESTCalls.get( {demoID:1234}, function (resp) {
                $scope.restresult = resp.data;
            });
        };


        $scope.buttonCall = function () {
            //$scope.increase();
            $scope.callbackObject.buttonCall();

        };

    }]);


