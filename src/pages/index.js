import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import HomeHero from '../components/home/HomeHero';

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title={config.siteName}
        url={config.siteUrl}
        image={config.metaLogo}
      />
      <HomeHero />
    </Layout>
  );
};
export default IndexPage;
