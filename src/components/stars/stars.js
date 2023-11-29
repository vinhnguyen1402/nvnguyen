import styled, { keyframes } from 'styled-components'
import { themes } from '../styles'

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`
console.log(themes)
const Stars = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;
  box-shadow: ${({ shadows }) => shadows};
  animation: ${animStar} ${({ speed }) => speed}s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: transparent;
    box-shadow: ${({ shadows }) => shadows};
    color: blue;
  }
`

export default Stars
