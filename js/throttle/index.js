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

function throttle2(func, time) {
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if (current - activeTime > time) {
      func.apply(this, arguments);
      activeTime = Date.now();
    }
  };
}

const testerFunc = () => {
  console.log('Throttles event');
};

window.addEventListener('resize', throttle(testerFunc));
