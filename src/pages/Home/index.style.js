import { animated } from 'react-spring'
import styled from 'styled-components'
import {SmallScreenBreakpoint} from '~/Constants'

const device = {
  tablet: `(max-width: ${SmallScreenBreakpoint}px)`
}

export const TextSection = styled(animated.div)`
margin: 2rem 5rem;
padding: 0 5rem;
@media ${device.tablet} {
  margin: 2rem 2rem;
  padding: 0;
}

  & > h2 {
  text-align: center;
  border-bottom: 1px solid #172A3A;
  margin-bottom: 2rem;
  }

  & > p {
    text-align: left;
  }
`

export const HelpfulDiv = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 16px;
  justify-content: center;
  & > p {
    margin: 0px 10px;
  }
  & > div .icon-container {
    margin: 0px 5px;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
    }
  }
`