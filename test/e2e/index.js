var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://192.168.50.125:7777/proxycenter2/tasks.html')
  .wait(5000)
  .click('a')
  .wait(5000)
  .evaluate(function () {
    return document.querySelector('a').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
