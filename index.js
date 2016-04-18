/**
 * 把数组范式化为对象 [{id:1,name:2},{id:2,name:3}]  => {1:{name:2},2:{name:3}}
 * @param ary {Array} 待转化数组
 * @param fieldKey {string} 索引键值
 * @returns {{}}  {Object} 范式化对象
 */

var cloneDeep = require('lodash.clonedeep');
var is = require('is_js');

module.exports = function (ary, fieldKey) {

  if (is.not.array(ary)) {
    throw new Error('ary is not an array');
  }
  if (is.empty(ary)) {
    throw new Error('ary can not be null');
  }
  if (is.not.string(fieldKey)) {
    throw new Error('key must be string');
  }
  if (is.empty(fieldKey)) {
    throw new Error('fieldKey can not be null');
  }
  var tempAry = JSON.parse(JSON.stringify((ary)));
  var destObject = {};
  tempAry.forEach(function (value, key) {
    if (!value[fieldKey]) {
      throw new Error('ary[' + key + ']' + 'does not has a key:' + fieldKey);
    }
    destObject[value[fieldKey]] = value;
    delete destObject[value[fieldKey]][fieldKey];
  });
  return destObject;
};