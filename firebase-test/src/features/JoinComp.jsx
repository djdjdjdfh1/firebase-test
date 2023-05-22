import React from 'react'
import { styled } from 'styled-components'

const Button = styled.a`
    display: inline-block;
    margin: 5px;
    padding: 4px 10px;
    color: white;
    background-color: green;
    border-radius: 5px;
`

export default function JoinComp({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
