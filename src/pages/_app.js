import Theme from '../styles/theme';
import Head from 'next/head'
import '../styles/snow.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Laktyushin Sergei</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 