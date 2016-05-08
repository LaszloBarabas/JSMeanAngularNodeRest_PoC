'use strict';
/**
 * Created by laszlo.barabas on 4/20/2016.
 */


var DemoListRESTServiceModule = angular.module('DemoListRESTServiceModule', ['ngResource']);

DemoListRESTServiceModule.factory('restDemoListRESTCalls', ['$resource', function ($resource) {

        return $resource(
                 'http://localhost:3030/demolist/:demoID', {demoID: '@demoID'}
             );
     } // end of factory function
]);

