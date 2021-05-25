var salary = '$1000';

(function () {
  console.log('Original salary ', salary); // undefined

  var salary = '$5000';

  console.log('New salary ', salary); // 5000
})();

/**
 * All declarations (function, var, let, const and class) are hoisted in
 * JavaScript, while the var declarations are initialized with undefined,
 * but let and const declarations remain uninitialized.
 */

const sa = '1000';

const test = () => {
  console.log('Or', sa); // Cannot access 'sa' before initialization

  const sa = '5000';
  console.log('New', sa);
};

test();
