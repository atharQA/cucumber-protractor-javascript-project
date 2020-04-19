const { Given, When, Then } = require('cucumber');
const calculatorPage = require('../pages/calculator.js');
const expect = require('chai').expect;

When('Hit The AngularIO Page URL', async () => {
    await browser.get('https://angular.io/docs');
});

Then('Verify The Page Title', async () => {
    browser.sleep(3000);
    const title = await browser.driver.getTitle();
    console.log('TITLE = ', title);
    await expect(title).to.be.equal("Angular - Introduction to the Angular Docs");
});

Then('Verify The Current Page URL', async () => {
    const url = await browser.driver.getCurrentUrl();
    console.log('URL = ', url);
    await expect(url).to.be.equal("https://angular.io/docs");
});

Then('Verify the sum of the array input', function () {
    const input_array = [10, 20, 30, 40, 50];
    var sum = 0;
    for (let i = 0; i < input_array.length; i++) {
        sum = sum + input_array[i];
    }
    console.log(sum);
    expect(sum).to.be.equal(150);
});

Then('Verify the sum of the number', function () {
    const a = 10;
    const b = 20;
    console.log('SUM IS = ', a + b);
});

Then('Verify Sum Of Given Numbers', function (Number1, Number2, Number3) {
    console.log('SUM OF THREE NUMBER ARE = ', Number1 + Number2 + Number3);
});


Then('Verify Sum Of Given Numbers {int} {int} {int}', function (Number1, Number2, Number3) {
    console.log('SUM OF THREE Integer are = ', Number1 + Number2 + Number3);
});


Then('Concat all input string parameters {string} {string} {string}', function (param1, param2, param3) {
    console.log('CONCAT STRING ARE = ', param1 + param2 + param3);
});

// Then('^Concat all input string parameters "(.*)" "(.*)" "(.*)"$', function (param1, param2, param3) {
//     console.log('CONCAT STRING ARE = ', param1 + param2 + param3);
// });

Then('Do Addition Operation For {int} {int}', function (num1, num2) {
    const sumValue = calculatorPage.doAddition(num1, num2);
    console.log('SUM VALUE = ', sumValue);
    expect(sumValue).to.be.equal(120);
});


Then('Do Subtraction Operation For {int} {int}', function (num1, num2) {
    const sumValue = calculatorPage.doSub(num1, num2);
    console.log('Subtraction VALUE = ', sumValue);
    expect(sumValue).to.be.equal(40);
});


Then('Do Multiplication Operation For {int} {int}', function (num1, num2) {
    const sumValue = calculatorPage.doMul(num1, num2);
    console.log('Multiplication VALUE = ', sumValue);
    expect(sumValue).to.be.equal(3200);
});


Then('Do Division Operation For {int} {int}', function (num1, num2) {
    const sumValue = calculatorPage.doDiv(num1, num2);
    console.log('Division VALUE = ', sumValue);
    expect(sumValue).to.be.equal(2);
});