import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextSection } from '../Home/index.style'
import {CommentDiv, Container} from './index.styled'

export default function Comments({comments}) {
  const [showComments, setShowComments] = useState(true)
  const {t} = useTranslation()
  const toggleComments = () => setShowComments(prevState => !prevState)


  return ( <Container>
    <div className="header">
      <h3>{t('Comments')}</h3>
      <button onClick={toggleComments}>{showComments ? t('Hide comments') : t('Show comments')}</button>
    </div>

    {showComments && (
      comments.map(({id, body, title}) => (
        <TextSection key={id}>
          <CommentDiv key={id}>
            <img src="https://flipweb.org/wp-content/uploads/2019/12/Comments-section.png" />
            <div className="comment-body">
              <div className="user">{`id: ${id}`}</div>
              <div className="comment-text">{body}</div>
              <div className="comment-reaction">
                <span>{t('Like')}</span>
                <span>{t('Reply')}</span>

              </div>
            </div>
          </CommentDiv>
        </TextSection>) )
    )
    }
  </Container>
  )
}
