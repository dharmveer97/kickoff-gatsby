import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HeroHeader from '../components/elements/HeroHeader';
import ServiceFeatures from '../components/ServiceFeatures';
import ServiceCategories from '../components/ServiceCategories';

const Service = () => {
  return (
    <Layout>
      <Seo title="Service" />
      <HeroHeader heading="Service" title="Service" />
      <ServiceCategories />
      <ServiceFeatures
        title="Faux Finishes"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title="Water Proofing"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        title=" Pre-Paint Demo"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title="Mildew Removal"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        title="Color Proof"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
      <ServiceFeatures
        secondary
        title=" Window Washing"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ab
              dolore nisi sunt quamquam..."
      />
    </Layout>
  );
};
export default Service;
