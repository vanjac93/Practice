import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { Home } from 'styled-icons/boxicons-solid'
import { SpotifyWithCircle } from 'styled-icons/entypo-social'
import {LibraryMusic} from '@styled-icons/material/LibraryMusic'
import {Search} from '@styled-icons/boxicons-regular/Search'

const TopMenuItem = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  color: #b3b3b3;
  align-items: center;
  & > svg {
    margin-right: 16px;
  }
  ${props => props.active && css`
      background-color: #282828; 
      color: white;
  `
}
`

const TopMenu = styled.div`
      
`

const PlaylistsDiv = styled.div`
  
`

const Panel = styled.div`
    flex: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    & > .logo {
      height: 45px;
      display: flex;
      padding: 10px;
      & > .label {
        margin-left: 5px;
      }
    }
   
`

const Main = styled.div`
    flex: 1;

`

const Container = styled.div`
  display: flex;
  height: ${({theme}) => `calc(100vh - ${theme.menu.height}px)`};
  flex-direction: row;
  background-color: black;
  color: white;
`

const fetchData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => data)
}

export default function Spotify() {
  const {t} = useTranslation()
  const [users,setUsers] = useState([])

  useEffect(() => {
    fetchData().then(setUsers)
  }, [])

  const renderPanel = () => {
    return <Panel>
      <div className="logo">
        <SpotifyWithCircle height={25} />
        <span className="label">{t('Spotify')}</span>
      </div>
      <TopMenu>
        <TopMenuItem active>
          <Home height={20} />
          {t('Home')}
        </TopMenuItem>
        <TopMenuItem>
          <Search height={20} />
          {t('Search')}
        </TopMenuItem>
        <TopMenuItem>
          <LibraryMusic height={20} />
          {t('Your Library')}
        </TopMenuItem>
      </TopMenu>
    </Panel>
  }

  const renderMain = () => {
    return <Main>

    </Main>
  }

  return (
    <Container>
      {renderPanel()}
      {renderMain()}
    </Container>
  )
}
