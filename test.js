var arrayToHash = require('./index.js');
var _ = require('lodash');
var assert = require('chai').assert;

var expected, current;

before(function () {

  current = [
    {
      id: 1,
      name: "youngwind",
      age: 24
    },
    {
      id: 2,
      name: 'xiaoye',
      age: 30
    }
  ];

  expected = {
    1: {
      name: 'youngwind',
      age: 24
    },
    2: {
      name: 'xiaoye',
      age: 30
    }
  };
});

describe('transform array to object', function () {

  it('should return an object which key is the parameter user input', function () {
    assert(_.isEqual(expected, arrayToHash(current, 'id')));
  });

});