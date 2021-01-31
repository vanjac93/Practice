import React from 'react'
import Layout from '../common/Layout'
import { TextSection } from '../Home/index.style'
import { useTranslation } from 'react-i18next'
import Videos from './Videos'

export default function About() {
  const {t} = useTranslation()


  return (
    <Layout title={t('About me')}>
      <TextSection >
        <h2>{t('About me')}</h2>
        <p>
          {t('I was born in Mrkonjic Grad, Bosnia and Herzegovina on December 10th 1993.')}
          {t('I have been studying at Faculty of Electrical Engineering since 2012, haven\'t graduaded yet.')}
          <br />
          {t('I like to amuse myself with thought that that\'s due to laziness and not stupidity.')}
        </p>
        <p>
          {t('My hobbies are cycling, cinematograpy, snooker, clasical literature, philosophy and psychology, stand-up comedy etc.')}
        </p>
        <p>
          {t('Since 2018 I have been working as a ReactJS developer as a part of MediaINFO team, working on transfering their site (originally written in Angular 1.0) to ReactJS.')}
        </p>
        <p>
          {t('As a part of that team I\'ve worked on Sharjah\'s Arabic Language Academy, a project with historical value in Arabic linguistics, because of the ability to see changes in meanings of words in all the eras in Arabic language.')}
        </p>
      </TextSection>
      <TextSection>
        <h2>{t('IT experience')}</h2>
        <p>
          {t('Here I will present a couple of videos and a slider from my MediaINFO work.')}
        </p>
        <p>
          {t('As I cannot share credentials, this is the only way to present previous work, besides these projects.')}
        </p>
        <p>
          {t('MediaINFO is a service for digitazing all kinds of media, photos, newspaper, museum artifacts, articles, books etc.')}
          <br />
          {t('User can browse digitized items, search throughout items, cut custom zones, download pages and so on.')}
        </p>
        <p>
          {t('My role was to implement several tools like clip, and CMS for zones, which are used in clip tool.')}
        </p>
        <p>
          {t('I have done a lot in admin CMS section, as well, but it\'s not really presentable.')}
        </p>
        <Videos />
      </TextSection>
    </Layout>
  )
}
