/* eslint-disable @next/next/no-page-custom-font */
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/components/UI/GlobalSyle';
import { temaClaro, temaEscuro } from '../src/components/UI/temas';
import { Container } from '../src/components/UI';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function MyApp({ Component, pageProps }) {

  const { asPath, pathname } = useRouter();

  let path = asPath ? asPath.substring(1) : pathname ? pathname.substring(1) : "";
  let title = `Genshin Impact ${path ? `- ${path}` : ""}`;
  
  const [tema, setTema] = useState(true);

  function mudarThema() {
    setTema((tema) => !tema);
  }

  return (
    <>
    <Head>

      <link rel="icon" type="image/png" href="/img/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content="Web site created using Nextjs"
      />
      <title>{ title }</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Oleo+Script+Swash+Caps&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tapestry&family=Water+Brush&display=swap" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={tema ? temaEscuro : temaClaro }>
        <GlobalStyle theme={tema ? temaEscuro : temaClaro }/>
        <Container>
          <div>
            <Header mudarThema={mudarThema} tema={tema}/>
            <Component {...pageProps} mudarThema={mudarThema} tema={tema}/>
          </div>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}
