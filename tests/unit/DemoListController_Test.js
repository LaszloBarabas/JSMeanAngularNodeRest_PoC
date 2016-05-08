'use strict';

/**
 * Created by laszlo.barabas on 4/20/2016.
 */



// define a new mock module and the comprised mock service
// teh mock service return an empty object
angular.module('MockDemoListRESTServiceModule', ['ngResource'])
    .factory('MockrestDemoListRESTCalls', ['$resource', function ($resource) {
        //return $resource ('/demolist/:demoID', {demoID: '@demoID'});
        return {};
    }]);



describe('DemoListController:: ', function () {

    // global place holder for the
    // global ::
    //          :: scope
    //          :: ctrl
    //          ::

    var scope, ctrl;

    // load the module which contains the tartget testing controller
    beforeEach(angular.mock.module('DemoListControllerModule'));


    // inject the global
    //      :: scope
    //      :: controller with the injected lock service
    //

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('DemoListController', {
            $scope: scope,
            //an empty services
            restDemoListRESTCalls: {}

        });

    }));


    it('$scope.restCall :: Check the rest callback function via mock function :: Return true', function () {

        // prepare the mock function to be called
        var mockRestDemoListRESTCallsGet = jasmine.createSpy('RestDemoListRESTCallsGet');

        // set the rest callback function via set properties
        scope.callbackObject.setRestCall(mockRestDemoListRESTCallsGet);

        // call the ..
        scope.callbackObject.restCall(mockRestDemoListRESTCallsGet);

        expect(mockRestDemoListRESTCallsGet).toHaveBeenCalled();

    });

    it('$scope.callresult:: Check the callback function via stub function  :: expect 6 ', function () {

        //prepare the  mock function to be called

        var mockIncreaseFunction = jasmine.createSpy('mockIncreaseFunction').and.callFake(function () {
            scope.callresult = 6;
        });


        // set through the set properties the right function
        scope.callbackObject.setButtonCall(mockIncreaseFunction);

        // prepare the initial values
        scope.value = 3;

        // call the call back function

        scope.callbackObject.buttonCall();

        expect(scope.callresult).toBe(6);

    });


    it('$scope.increase :: Check increase functionality  no stub :: expect 4', function () {

        scope.value = 2;
        // call the function directly
        scope.increase();
        expect(scope.callresult).toEqual(4);


    });


    it('Control  :: Check the control existance  :: expect True  ', function () {


        expect(ctrl).toBeDefined();
    });


});