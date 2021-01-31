import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '~/pages/common/Layout'
import CookiesAlert from './CookiesAlert'
import SpotifyDevMenu from './SpotifyDevMenu'

export default function SpotifyDeveloper(props) {
  const {t} = useTranslation()
  return (
    <Layout title={t('Spotify for Developers')}>
      <CookiesAlert />
      <SpotifyDevMenu />
    </Layout>
  )
}
