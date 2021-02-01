import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { useTranslation } from 'react-i18next'
import BackToTopPopup from '~/components/BackToTopPopup'
import { Dimmer, Loader } from 'semantic-ui-react'

const StyledLayout = styled(animated.div)`
  padding: 20px;
  position: relative;
`

export default function Layout(props) {
  const style = useSpring({opacity: 1, from: {opacity: 0}})
  const {t} = useTranslation()

  useEffect(() => {
    document.title = t('Portfolio - {{title}}', {title: props.title})
  }, [props.title])

  const scrollToTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <Fragment>
      <Dimmer active={props.isBusy}>
        <Loader content={t('Loading...')} />
      </Dimmer>
      <StyledLayout style={style}>
        <BackToTopPopup onClick={scrollToTop} />
        {props.children}
      </StyledLayout>
    </Fragment>
  )
}
