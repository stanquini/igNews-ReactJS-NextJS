import { Provider as NextAuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.seesion}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
