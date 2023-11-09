import { GlobalStyle } from '~/app/core/global-style'
import { Theme } from '~/app/core/Theme'
import { RootProvider } from '~/app/providers'
import { Content } from '../content/content.component'
import { Footer } from '../footer/footer.component'
import { Header } from '../header/header.component'
import { Container } from './main.styled'

export const Main = () => {
  return (
    <RootProvider>
      <Theme>
        <GlobalStyle />

        <Container>
          <Header />

          <Content />

          <Footer />
        </Container>
      </Theme>
    </RootProvider>
  )
}
