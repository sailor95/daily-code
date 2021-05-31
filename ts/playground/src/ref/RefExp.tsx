import React, { FC, MutableRefObject } from 'react';

interface RefExpProps {
  externalRef: MutableRefObject<null>;
}

const RefExp: FC<RefExpProps> = ({ externalRef }) => {
  return <div ref={externalRef}>Ref Exp</div>;
};

export default RefExp;
