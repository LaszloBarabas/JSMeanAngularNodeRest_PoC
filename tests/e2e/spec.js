// spec.js
describe('Check the main app functioanlities ', function() {
  it('::Check the increase Push call funtionality:: Expect 24' , function () {
    browser.get('http://localhost:3030');

    // find the DOM element with angular model name: value
    // and fill it with initail value 4

      element(by.model('value')).clear();
      element(by.model('value')).sendKeys(4);

    // find the button with the id = callbutton and call it
        element(by.id('callbutton')).click();

    // see what is the calculated value and check for expected value
        expect(element(by.binding('callresult')).getText()).toEqual('The call result is 8 !');
  } );


    it('::Check the rest call funtionality:: Expect resp' , function () {
        browser.get('http://localhost:3030');

        // find the button with the id = callbutton and call it
        element(by.id('restbutton')).click();

        // see what is the calculated value and check for expected value
        expect(element(by.binding('restresult')).getText()).toEqual('The REST result is Answer for the pull-branch v3.0: 4 !');
    } );


});






/**
 * input ng-model='value'    accept the inputs
 *  the others have no id.s
 *
 *
 */