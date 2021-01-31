import React, { useState } from 'react'
import Layout from '~/pages/common/Layout'
import { useTranslation } from 'react-i18next'
import { Divider, List } from 'semantic-ui-react'
import { HelpfulDiv, TextSection } from './index.style'
import NewTabLink from '~/components/NewTabLink'
import {Smile} from '@styled-icons/feather/Smile'
import {Frown} from '@styled-icons/feather/Frown'
import Swal from 'sweetalert2'

export default function Home() {
  const {t} = useTranslation()
  const [wasHelpful, setWasHelful] = useState(true)

  const handleVote = helpful => () => {
    if(helpful) {
      Swal.fire({
        title: t('Cheers!'),
        text: t('Thanks for voting.')
      })
      setWasHelful(helpful)
    } else {
      Swal.fire({
        title: t('Wrong answer!'),
        text: t('Wrong answer, sorry. Will fix it for you in a second.'),
        confirmButtonText: t('Thanks, Vanja'),
        willClose: () => setWasHelful(false),
        didClose: () => {
          setTimeout(() => {
            setWasHelful(true)
          }, 2000)
        }
      })
    }
  }

  const renderHelloSection = () => (
    <TextSection>
      <h2 >{t('Hello world!')}</h2>
      <p>{t('This is my portfolio project, used in order to display skills.')}</p>
      <p>{t('It consists of several sections:')}</p>
      <List bulleted>
        <List.Item content={t('About me')} />
        <List.Item content={t('Mockups')} />
        <List.Item content={t('Features')} />
      </List>
      <p>
        {t('About me is a purely narcissistical page packed with some videos of my MediaINFO work, animations, some strange logic and even stranger sense of humour.')}
      </p>
      <p>
        {t('Mockup section is where I made some clone of popular apps, like Spotify, Trello etc.')}
      </p>
      <p>
        {t('Features page is used to describe some of the abovementioned strange logic and app behaviour.')}
        <br />
        {t('For example, "was this page helpful?" pole in the bottom has an interesting behaviour.')}

      </p>
    </TextSection>
  )

  const renderProjectDetailsSection = () => (
    <TextSection>
      <h2>
        {t('Project setup details')}
      </h2>
      <p >
        {t('The project is bootstraped with NWB in order to tweak some basic webpack settings without having to do eject with create-react-app.')}
      </p>
      <p>
        {t('Static type-checking is done with Flow, although I\'m experienced with Typescript as well.')}
      </p>
    </TextSection>
  )


  const renderPackagesSection = () => (
    <TextSection>
      <h2>
        {t('Packages and practices used')}
      </h2>
      <p>
        {t('There are many packages used in this project, with the only goal of displaying knowledge, not writing consistent and small-bundled code.')}
      </p>
      <p>{t('Some of them are:')}</p>
      <List bulleted>
        <List.Item>
          <NewTabLink to="https://styled-components.com/" content="styled-components" />
        </List.Item>
        <List.Item>
          <NewTabLink to="https://www.i18next.com/" content="react-18next" />
        </List.Item>
        <List.Item>
          <NewTabLink to="https://react.semantic-ui.com/" content="semantic-ui-react" />
        </List.Item>
        <List.Item>
          <NewTabLink to="https://material-ui.com/" content="material-ui" />
        </List.Item>
        <List.Item>
          <NewTabLink to="https://react-dnd.github.io/react-dnd/about" content="react-dnd" />
        </List.Item>
      </List>
      <p>
        {t('The whole project is implemented using hooks, context API, linting, type-checking, zizekisms and so on, and so on...')}
      </p>
    </TextSection>
  )

  const renderWasHelpful = () => {
    return <HelpfulDiv>
      <small>{t('Was this page helpful?')}</small>
      <div style={{display: 'flex'}}>
        <div className="icon-container" onClick={handleVote(true)}>
          <Smile fill={wasHelpful ? 'green' : 'white'} size={30} />
        </div>
        <div onClick={handleVote(false)} className="icon-container">
          <Frown fill={!wasHelpful ? 'red' : 'white'} size={30} />
        </div>
      </div>
    </HelpfulDiv>
  }

  return (
    <Layout title={t('Home')}>
      {renderHelloSection()}
      {renderProjectDetailsSection()}
      {renderPackagesSection()}
      <Divider />
      {renderWasHelpful()}
    </Layout>
  )
}
