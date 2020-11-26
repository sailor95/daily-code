const throttle = fn => {
  let canRun = true;

  return () => {
    if (!canRun) return;

    canRun = false;

    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500);
  };
};

const testerFunc = () => {
  console.log('Throttles event');
};

window.addEventListener('resize', throttle(testerFunc));
