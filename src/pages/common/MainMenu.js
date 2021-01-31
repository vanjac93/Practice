import React, { Fragment, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Routes } from '~/Constants'
import {Context} from '~/App'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import { Dropdown } from 'semantic-ui-react'
import { PersonFill } from 'styled-icons/bootstrap'
import {Infinity} from '@styled-icons/entypo/Infinity'
import {Home} from '@styled-icons/boxicons-solid/Home'
import { useTranslation } from 'react-i18next'
import {StyledLink, StyledItem, StyledMenu} from './MainMenu.styled'

export default function MainMenu() {
  const {pathname} = useLocation()
  const {smallScreen} = useContext(Context)
  const history = useHistory()
  const {t} = useTranslation()
  const isActive = route => (route === pathname).toString()

  const handleReroute = route => () => history.push(route)

  const renderMenu = () => {
    if(smallScreen) {
      return <Dropdown direction="left" style={{margin: 20}} icon={<Menu height={30} />} >
        <Dropdown.Menu>
          <StyledItem onClick={handleReroute(Routes.HOME)} >
            <Home size={18} /> <span>{t('Home')}</span>
          </StyledItem>
          <StyledItem onClick={handleReroute(Routes.ABOUT)} >
            <PersonFill size={18} /> <span>{t('About me')}</span>
          </StyledItem>
          <StyledItem onClick={handleReroute(Routes.MOCKUP)} >
            <Infinity size={18} /> <span>{t('Mockups')}</span>
          </StyledItem>
          <StyledItem onClick={handleReroute(Routes.LANGUAGES)} >
            <PersonFill size={18} /> <span> {t('Languages')} </span>
          </StyledItem>

        </Dropdown.Menu>
      </Dropdown>
    } else {
      return (
        <Fragment>
          <StyledLink active={isActive(Routes.HOME)} to={Routes.HOME}>
            {t('Home')}
          </StyledLink>
          <StyledLink active={isActive(Routes.ABOUT)} to={Routes.ABOUT}>
            {t('About')}
          </StyledLink>
          <StyledLink active={isActive(Routes.MOCKUP)} to={Routes.MOCKUP}>
            {t('Mockups')}
          </StyledLink>
          <StyledLink active={isActive(Routes.LANGUAGES)} to={Routes.LANGUAGES}>
            {t('Languages')}
          </StyledLink>
        </Fragment>
      )
    }
  }
  return (
    <StyledMenu smallScreen={smallScreen}>
      <Link className="title" to={Routes.HOME}>
        {t('Portfolio')}
      </Link>
      {renderMenu()}
    </StyledMenu>
  )
}
