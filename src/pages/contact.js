import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" url={config.siteUrl} image={config.metaLogo} />
      <section className="section hero is-danger is-halfheight">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-6">
              <p className="title is-1">Contact Page</p>
              <p className="subtitle is-2">
                Half height subtitle Half height subtitleHalf height
                subtitleHalf height subtitleHalf height subtitle height
                subtitleHalf height subtitle
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ContactPage;
