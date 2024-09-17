import {AppProps} from 'next/app'
import Image from 'next/future/image'

import {globalStyles} from '../styles/global'
import {Container, Header} from '../styles/pages/app'
import logoImg from '../assets/logo.png'

globalStyles()

function App({Component, pageProps}: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={130} height={130} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
