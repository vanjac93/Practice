import React, { createContext, useEffect, Suspense, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../public/theme'
import FallbackComponent from './components/FallbackComponent'
import Router from './pages/RouterComponent'
import { SmallScreenBreakpoint } from '~/Constants'
import './services/i18n'

export const Context = createContext({
  smallScreen: document.body.clientWidth < SmallScreenBreakpoint
})

export default function App() {
  const [smallScreen, setSmallScreen] = useState(document.body.clientWidth < SmallScreenBreakpoint)

  useEffect(() => {
    const resize = () => {
      if (!smallScreen && document.body.clientWidth < SmallScreenBreakpoint) {
        setSmallScreen(true)
      }
      if (smallScreen && document.body.clientWidth > SmallScreenBreakpoint) {
        setSmallScreen(false)
      }
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [smallScreen])

  return (
    <Suspense fallback={<FallbackComponent />}>
      <Context.Provider value={{ smallScreen }}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Context.Provider>
    </Suspense>
  )
}
