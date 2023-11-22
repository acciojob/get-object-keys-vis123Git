const student = {
  name: 'John Doe'
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Test the getKeys() method
const keys = student.getKeys();
console.log(keys);