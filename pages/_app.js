import '../styles/globals.css'
import Head from 'next/head'
import Header1 from '../components/Header/Header1'
import Footer from '../components/Footer'
import Media from '../components/media'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
          <title>Hot Rockets</title>
          <link rel="icon" href="/pepper.png" />
        </Head>
        <Header1 />
        <Component {...pageProps} />
        <Media/>
        <Footer />
      </div>
  )
}

export default MyApp
