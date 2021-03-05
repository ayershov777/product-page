import Head from 'next/head';

import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            {/* Bootstrap */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" crossOrigin="anonymous" />
            {/* Slick */}
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Component {...pageProps}/>
    </>
);
}

export default MyApp
