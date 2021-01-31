import { Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

export const StyledLink = styled(Link)`
  margin: 20px;
  color: #36404c;
  ${({active}) => active === 'true' && css` border-bottom: 1px solid black;`}
`

export const StyledItem = styled(Dropdown.Item)`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 16px !important;
    & > span {
      margin: 0 5px !important; 
    }
`

export const StyledMenu = styled.div`
  position: relative; 
  height: ${props => `${props.theme.menu.height}px`};
  display: flex;
  justify-content: ${({smallScreen}) => smallScreen ? 'flex-end' : 'center'};
  align-items: center;
  & > .title {
    position: absolute;
    top: 30px;
    color: black;
    left: 2rem;
    font-family: 'SIMPLIFICA';
    font-size: 3rem;
  }
`