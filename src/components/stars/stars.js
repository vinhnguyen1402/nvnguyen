import styled, { keyframes } from 'styled-components'

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`

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

// /* Syntax */
// box-shadow: h-offset v-offset blur spread color inset;

// /* Individual Attributes */
// h-offset: Horizontal offset of the shadow. Positive values move the shadow right, and negative values move it left.

// v-offset: Vertical offset of the shadow. Positive values move the shadow down, and negative values move it up.

// blur: Optional. The blur radius. A higher value creates a more blurred shadow.

// spread: Optional. The spread radius. A positive value expands the shadow, and a negative value contracts it.

// color: The color of the shadow.

// inset: Optional. If present, the shadow becomes an inset shadow.

// /* Examples */
// box-shadow: 5px 5px 10px #888888;
// box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
// box-shadow: inset 0 0 5px 2px #333333;
