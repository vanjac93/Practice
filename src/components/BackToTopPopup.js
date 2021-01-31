import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { animated, useSpring } from 'react-spring'
import { Popup } from 'semantic-ui-react'
import styled, { useTheme } from 'styled-components'
import { ArrowToTop } from 'styled-icons/boxicons-solid'
import { Context } from '../App'

const StyledPopup = styled(Popup)`
  font-size: ${({theme: {layout: {backToTopPopup: {fontSize}}}}) => `${fontSize}px`} !important;
`

const StyledDiv = styled(animated.div)`
  position: fixed;
  right: ${props => `-${props.theme.layout.backToTopPopup.height}px`};
  top: 10%;
  transform: translateY(-50%);
  height: ${({smallscreen,theme: {layout: {backToTopPopup: {height}}}}) => smallscreen === 'true' ? 30 : `${height}px`};
  width: ${({smallscreen,theme: {layout: {backToTopPopup: {width}}}}) => smallscreen === 'true' ? 30 : `${width}px`};
  font-size: ${({theme: {layout: {backToTopPopup: {fontSize}}}}) => `${fontSize}px`};
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  background-color: beige;
  &:hover {
    cursor: pointer;
  }
  & > svg {
    margin-right: 5px;
  }
`
export default function BackToTopPopup(props) {
  const {layout: {backToTopPopup: {width}}, menu: {height}} = useTheme()
  const [showBackToTop, setShowBackToTop] = useState(window.scrollY >= height)
  const {smallScreen} = useContext(Context)
  const [initialized, setInitialized] = useState(false)
  const {t} = useTranslation()

  let right
  let from = {}

  if(initialized) {
    right = showBackToTop ? 20 : -width
    from.right = showBackToTop ? 20 : width
  } else {
    right = (-width)
    from.right = (-width)
  }

  const endPopupStyle = useSpring({right,from})

  const updatePopup = () => {
    setInitialized(true)
    if(window.scrollY >= height) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }

  useEffect(() => {
    updatePopup()

    const onScroll = () => {
      if(window.scrollY >= height) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if(smallScreen) {
    return (
      <StyledPopup trigger={<StyledDiv smallscreen={smallScreen.toString()} style={endPopupStyle} onClick={props.onClick}>
        <ArrowToTop height={15} />
      </StyledDiv>}>
        {t('Back to top?')}
      </StyledPopup>
    )
  } else {
    return (
      <StyledDiv smallscreen={smallScreen.toString()} style={endPopupStyle} onClick={props.onClick}>
        <ArrowToTop height={15} />
        {t('Go to top?')}
      </StyledDiv>
    )
  }
}
