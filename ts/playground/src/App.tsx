import React, { useRef } from 'react';

import FormExp from './form';
import RefExp from './ref';

function App() {
  const refExpCompRef = useRef(null);

  return (
    <>
      <FormExp />
      <RefExp externalRef={refExpCompRef} />
    </>
  );
}

export default App;
