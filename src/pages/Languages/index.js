import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Layout from '../common/Layout'
import {Languages as languages} from '~/Constants'
import i18n from '~/services/i18n'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const LanguageDiv = styled.div`
  margin: 20px;
  flex-basis: 100px;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
  min-width: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: transform .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export default function Languages() {
  const {t} = useTranslation()

  const handleSetLanguage = lan => () => i18n.changeLanguage(lan.id)

  return (
    <Layout title={t('Languages')}>
      <Container>
        {
          Object.values(languages).map(language => <LanguageDiv onClick={handleSetLanguage(language)} key={language.id}>
            <p>{language.label}</p>
            <p>{language.native}</p>
          </LanguageDiv>)
        }
      </Container>

    </Layout>
  )
}
