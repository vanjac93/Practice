import React, { Fragment, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { Spotify } from 'styled-icons/entypo-social'
import { Context } from '~/App'
import i18n from '~/services/i18n'

const MenuDiv = styled.div`
    background-color: black;
    font-size: 14px;
    color: white;
    display: flex;
    position: relative;
`

const MenuItem = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 5px;
    & > span:hover {
      color: green;
      cursor: default;
    }
`

const MenuItems = [
  i18n.t('Discover'),
  i18n.t('Docs'),
  i18n.t('Console'),
  i18n.t('Community'),
  i18n.t('Dashboard'),
  i18n.t('Use cases')
]

const MenuItemContent = styled(animated.div)`
  position: absolute;
  color: black;
  top: 100%;
  left: 0px;
  width: 100%;
  background-color: beige;
  overflow: hidden;
`

const StyledLogo = styled.div`
  padding: 5px;
  margin-right: 10px;
  svg {
    margin: 5px;
  }
  .spotify-span {
    font-weight: bold;
  } 
`

const SmallScreenRightMenu = styled.div`
    width: 100%;
    top: 100%;
    position: absolute;
    color: black;
    background-color: #f2f2f2;
    padding: 10px;
`

const getSpring = visible => {
  return {
    opacity: visible ? 1 : 0,
    maxHeight: visible ? 200 : 0,
    from: {
      opacity: visible ? 0 : 1,
      maxHeight: visible ? 0 : 200
    }
  }
}

export default function SpotifyDevMenu() {
  const [data, setData] = useState({
    activeMenuItem: null,
    menuOpen: false
  })

  const [visible, setVisible] = useState(false)
  const {smallScreen} = useContext(Context)
  const {t} = useTranslation()
  const style = useSpring(getSpring(visible))

  const toggleVisible = item => () => {
    setData({
      activeMenuItem: item,
      visible: true
    })
  }

  function renderMenu() {
    if(smallScreen) {
      return <SmallScreenRightMenu>
        test
      </SmallScreenRightMenu>
    }

    const setItem = (item) => () => {

    }


    return ( <Fragment>
      <MenuItem onMouseEnter={setItem(MenuItems.DISCOVER,true)} onMouseLeave={setItem()} >
        <span>{t('Discover')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
      <MenuItem onMouseEnter={toggleVisible(true)} onMouseLeave={toggleVisible(false)} >
        <span>{t('Docs')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
      <MenuItem onMouseEnter={toggleVisible(true)} onMouseLeave={toggleVisible(false)} >
        <span>{t('Console')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
      <MenuItem onMouseEnter={toggleVisible(true)} onMouseLeave={toggleVisible(false)} >
        <span>{t('Community')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
      <MenuItem onMouseEnter={toggleVisible(true)} onMouseLeave={toggleVisible(false)} >
        <span>{t('Dashboard')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
      <MenuItem onMouseEnter={toggleVisible(true)} onMouseLeave={toggleVisible(false)} >
        <span>{t('Use cases')}</span>
        <MenuItemContent style={style} >
          <p>test</p>
          <p>test</p>
        </MenuItemContent>
      </MenuItem>
    </Fragment>
    )
  }

  return (
    <MenuDiv>
      <StyledLogo>
        <Spotify height={30} />
        <span className="spotify-span">Spotify</span>&nbsp;
        <span>for Developers</span>
      </StyledLogo>
      {renderMenu()}

    </MenuDiv>
  )
}
