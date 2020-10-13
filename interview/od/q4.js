var kill1 = function (x) {
  delete x;
  return x;
};

var temp = 1;
var kill2 = function () {
  delete temp;
  return temp;
};

var temp2 = {name: 'GG'};
var kill3 = function () {
  delete temp2.name;
  return temp2;
};

var Employee = {
  name: 'xyz',
};

var temp3 = Object.create(Employee);
delete temp3.name;

var temp4 = [1, 2, 3];
delete temp4[1];

console.log(kill1(10));
console.log(kill2());
console.log(kill3());
console.log(temp3);
console.log(temp4);
