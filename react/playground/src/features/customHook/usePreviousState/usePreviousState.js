import { useRef, useEffect } from 'react';

// Ref: https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
const usePreviousState = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePreviousState;
