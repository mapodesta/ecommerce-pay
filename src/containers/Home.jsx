import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ecomm-Pay Store</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mathi.podesta" />
        <meta name="twitter:creator" content="@mathi.podesta" />
        <meta name="twitter:title" content="Ecomm-Pay Store" />
        <meta name="twitter:description" content="Ecomm-Pay Store" />
        <meta
          name="twitter:image"
          content="https://ewm.swiss/application/files/1415/9168/0697/7_Reasons_to_Choose_PrestaShop.jpg"
        />
        <meta property="og:title" content="Ecomm-Pay Store" />
        <meta property="og:description" content="Ecomm-Pay Store" />
        <meta
          property="og:image"
          content="https://ewm.swiss/application/files/1415/9168/0697/7_Reasons_to_Choose_PrestaShop.jpg"
        />
        <meta property="og:url" content="https://ecomm-pay.web.app" />
        <meta property="og:site_name" content="Ecomm-Pay Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>

      <Products products={initialState.products} />
    </>
  );
}
