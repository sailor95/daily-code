import React, { useState } from 'react'

import styles from './styles.module.scss'

const OnBlurTrick = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={show ? 'Click away to hide' : 'Click to show...'}
        readOnly
        onClick={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      <div
        className={styles.show}
        style={{ color: show ? 'black' : 'transparent' }}
      >
        Hello Baby
      </div>
    </div>
  )
}

export default OnBlurTrick
