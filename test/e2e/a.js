casper.start('http://192.168.50.125:7777/proxycenter2/tasks.html');

casper.thenEvaluate(function(term) {
  document.querySelector('input[name="q"]').setAttribute('value', term);
  document.querySelector('form[name="f"]').submit();
}, 'CasperJS');

casper.then(function() {
  // Click on 1st result link
  this.click('h3.r a');
});

casper.then(function() {
  // Click on 1st result link
  this.click('h3.r a',10,10);
});

casper.then(function() {
  // Click on 1st result link
  this.click('h3.r a',"50%","50%");
});


casper.then(function() {
  console.log('clicked ok, new location is ' + this.getCurrentUrl());
});

casper.run();
