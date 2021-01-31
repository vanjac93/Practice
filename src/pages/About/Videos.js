import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'

const videoPath = '/public/assets/videos/'

const VideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    & .item {
        margin: 20px 0px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        & > h3 {
          margin: 0;
        }
        & > .video {
            border: 1px solid violet;
            border-radius: 4px;
            margin: 10px;
            width: 50vw;
            padding: 10px;
            box-shadow: 5px black;
        }
        & > .description {
            width: 50vw;
            padding: 10px;
            text-align: center;
        }
    }   
`


export default function Videos() {
  const {t} = useTranslation()
  return (
    <VideosContainer>
      <div className="item">
        <h3>{t('Clip tool')}</h3>
        <div className="video">
          <ReactPlayer width="100%" height="100%"
            controls url={videoPath.concat('lastClip.mp4')} />
        </div>
        <div className="description">
          <small>
            {t('Users can translate and quote selected text, extract images, even whole pages.')}
          </small>
        </div>
      </div>
      <div className="item">
        <h3>{t('Zone manager')}</h3>
        <div className="video">
          <ReactPlayer controls
            width="100%" height="100%"
            url={videoPath.concat('zoneManager.mp4')} />
        </div>
        <div className="description">
          <small>
            {t('Zone manager is used by administrators to define and edit existing zones.')}
          </small>
        </div>
      </div>
    </VideosContainer>
  )
}
