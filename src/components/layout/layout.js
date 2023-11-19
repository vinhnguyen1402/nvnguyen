import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { ResetCSS, GlobalStyle, themes } from '../styles'
import Header from '../header'
import Footer from '../footer'
import { useDarkMode } from './useDarkMode'
import { animateOnScroll } from '../../utils/isVisible'

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useDarkMode()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    animateOnScroll()
  }, [])
  return (
    <ThemeProvider theme={themes[theme || 'light']}>
      <ResetCSS />
      <GlobalStyle />
      <StyledContainer>
        <Header location={location} onChangeTheme={setTheme} theme={theme} />
        {children}
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}

export default Layout
