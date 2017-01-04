'use strict';

var test = require('tape');
var atoa = require('../atoa.js');

test('atoa should cast array-like objects into true arrays', function(t) {
  t.equal(Array.isArray(atoa(arguments)), true);

  t.end();
});