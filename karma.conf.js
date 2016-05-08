/**
 * Created by laszlo.barabas on 4/21/2016.
 */

var path = require('path')

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'public/libs/angular/angular.js',
            'public/libs/angular-route/angular-route.js',
            'public/libs/angular-resource/angular-resource.js',
            'public/libs/angular-mocks/angular-mocks.js',
            'public/js/app.js',
            'public/js/controllers/*.js',
            'public/js/services/*.js',
            'tests/unit/*.js'
        ],

        browsers: ['Chrome'],

	reporters: ['progress', 'html', 'coverage'],   

	htmlReporter: {
		outputFile: 'tests/units.html' 
		}, 

	preprocessors: {'public/js/**/*.js': ['coverage'] } , 

        autoWatch: true,

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
	        'karma-junit-reporter',
	        'karma-coverage',
	        'karma-htmlfile-reporter'
        ]


    });
};
