import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react'

import styles from './styles.module.css'

const ImperativeHandleChildren = forwardRef(({ children }, forwardedRef) => {
  // You can call the registered methods from parent with the ref
  useImperativeHandle(forwardedRef, () => ({
    setAlert: alertText => alert(alertText),
  }))

  return <div ref={forwardedRef}>{children}</div>
})

const ImperativeHandleParent = () => {
  const ref = useRef(null)

  const handleFunc = () => {
    ref.current.setAlert('Test Alert')
  }

  return (
    <ImperativeHandleChildren ref={ref}>
      <div className={styles.container}>
        <div style={{ marginBottom: '1rem' }}>
          Click to trigger imperative handle function
        </div>
        <button onClick={handleFunc}>Click</button>
      </div>
    </ImperativeHandleChildren>
  )
}

export default ImperativeHandleParent
