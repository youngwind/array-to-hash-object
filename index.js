/**
 * 把数组范式化为对象 [{id:1,name:2},{id:2,name:3}]  => {1:{name:2},2:{name:3}}
 * @param ary {Array} 待转化数组
 * @param fieldKey {string} 索引键值
 * @returns {{}}  {Object} 范式化对象
 */

var isArray = require('lodash.isarray');
var isEmpty = require('lodash.isempty');
var isString = require('lodash.isstring');
var cloneDeep = require('lodash.clonedeep');
module.exports = function (ary, fieldKey) {

  if (!isArray(ary)) {
    throw new Error('ary is not an array');
  }
  if (isEmpty(ary)) {
    throw new Error('ary can not be null');
  }
  if (!isString(fieldKey)) {
    throw new Error('key must be string');
  }
  if (isEmpty(fieldKey)) {
    throw new Error('fieldKey can not be null');
  }
  var tempAry = cloneDeep(ary);
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