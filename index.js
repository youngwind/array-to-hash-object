/**
 * 把数组范式化为对象 [{id:1,name:2},{id:2,name:3}]  => {1:{name:2},2:{name:3}}
 * @param ary {Array} 待转化数组
 * @param fieldKey {string} 索引键值
 * @returns {{}}  {Object} 范式化对象
 */


module.exports = function (ary, fieldKey) {

  if (!Array.isArray(ary)) {
    throw new Error('ary is not an array');
  }
  if (!ary.length) {
    throw new Error('ary can not be null');
  }
  if (typeof fieldKey !== "string") {
    throw new Error('key must be string');
  }
  if (!fieldKey.length) {
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