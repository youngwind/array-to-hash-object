# What this package do？
Transform array to object with a custom hash key.
For example.

```
var before = [
{
  id:1,
  name:"youngwind',
  age:24
},
{
 id:2,
 name:"xiaoye",
 age:30
}
];

```

```
// after
{
  1:{
    name:"youngwind",
    age:24
  },
  2:{
    name:"xiaoye",
    age:30
  }
}
```

# Install
```
npm install array-to-hash-object --save
```

# Usage
```
var arrayToHash = require('array-to-hash-object');
var after = arrayToHash(before,'id');
console.log(after);
```

