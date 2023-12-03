import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { ResetCSS, GlobalStyle, themes } from '../styles'
import Header from '../header'
import Footer from '../footer'
import { useDarkMode } from './useDarkMode'
import { animateOnScroll } from '../../utils/isVisible'
import Stars from '../../components/stars'

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useDarkMode()

  const [, refresh] = useState(null)

  const sizeSmall = 1
  const sizeMedium = 2
  const sizeBig = 3

  // document.addEventListener("DOMContentLoaded", function() {
  //   var documentHeight = document.documentElement.scrollHeight;
  //   console.log(documentHeight);
  // });

  const multipleBoxShadow = n => {
    let value = ''
    const dimension =
      document.getElementById('___gatsby').scrollHeight > window.innerWidth
        ? document.getElementById('___gatsby').scrollHeight
        : window.innerWidth

    for (let i = 1; i <= n; i++) {
      value += `${Math.random() * dimension}px ${Math.random() * dimension}px ${
        theme === 'dark' ? '#FFF' : theme === 'light' ? '#000' : ''
      }`
      if (i !== n) {
        value += ', '
      }
    }

    return value
  }

  const shadowsSmall = multipleBoxShadow(700)
  const shadowsMedium = multipleBoxShadow(200)
  const shadowsBig = multipleBoxShadow(100)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    animateOnScroll()

    const onResize = () => {
      refresh(window.innerWidth + window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <ThemeProvider theme={themes[theme || 'light']}>
      <ResetCSS />
      <GlobalStyle />
      <StyledContainer>
        <Header location={location} onChangeTheme={setTheme} theme={theme} />
        <Stars size={sizeSmall} shadows={shadowsSmall} speed={50} />
        <Stars size={sizeMedium} shadows={shadowsMedium} speed={100} />
        <Stars size={sizeBig} shadows={shadowsBig} speed={20} />
        {children}
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
