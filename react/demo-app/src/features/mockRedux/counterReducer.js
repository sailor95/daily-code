const increment = () => ({ type: 'INC' });
const decrement = () => ({ type: 'DEC' });

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    default:
      return state;
  }
};

export default reducer;
export { increment, decrement };
