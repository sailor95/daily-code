import React, { useState } from 'react'
import styled from 'styled-components'

interface TestComponentProps {
  disabled: boolean
}

const TestComponent = styled.div<TestComponentProps>`
  background-color: black;
  cursor: ${(props: TestComponentProps) =>
    props.disabled ? 'not-allowed' : 'default'};
`

const DemoProp = () => {
  const [allow, setAllow] = useState(false)

  return (
    <div>
      <TestComponent disabled={allow} onClick={() => setAllow(prev => !prev)} />
    </div>
  )
}

export default DemoProp
