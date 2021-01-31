import React, {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Routes } from '~/Constants'
import Layout from '../common/Layout'
import * as API from '~/services/api'
import Comments from './Comments'

export default function Mockup() {
  const {t} = useTranslation()
  const [data, setData] = useState({comments: [], isBusy: false})

  useEffect(() => {
    const fetchData = async () => {
      setData(prevData => ({...prevData, isBusy: true}))
      try {
        const [data] = await API.get('posts')
        setData(prevData => ({...prevData, isBusy: false, comments: data}))
      } catch (error) {
        setData({...data, isBusy: false, error: error.response.data.error.message})
      }
    }

    fetchData()
  }, [])


  const {error,isBusy,comments} = data
  return (
    <Layout isBusy={isBusy} error={error} title={t('Mockups')}>
      <div>
        <Link to={Routes.SPOTIFY}>
          <p>spotify</p>
        </Link>
        <Link to={Routes.TRELLO}>
          <p>trello</p>
        </Link>
        <Comments comments={comments}/>
      </div>
    </Layout>
  )
}
