import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'

const CookiesDiv = styled.div`
    background-color: #509bf5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 5px;
    color: white;
`

export default function CookiesAlert() {
  const {t} = useTranslation()
  const [isHidden, setIsHidden] = useState(false)

  const handleClose = () => {
    setIsHidden(true)
  }

  return ( !isHidden &&
    <CookiesDiv>
      {t('We - and our partners - use cookies to deliver our services and to show you ads based on your interests. By using our website, you agree to the use of cookies as described in our Cookie Policy.')}
      <CloseOutline onClick={handleClose} height={20} />
    </CookiesDiv>
  )
}
