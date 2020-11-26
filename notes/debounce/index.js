const debounce = fn => {
  let timeout = null;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
};

const testerFunc = () => {
  console.log('Successfully debounced!');
};

const testNode = document.getElementById('test-node');

testNode.addEventListener('input', debounce(testerFunc));
