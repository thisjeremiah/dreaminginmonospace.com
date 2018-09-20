import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import App, { Container } from 'next/app'

import { theme } from '../theme'

type LayoutProps = {
  children: any
}

class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default class SampleApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </Container>
    )
  }
}
