import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="SolanaKYC - The Trusted KYC Partner for Solana Projects" />
        <Banner />
        <KeyFeature />
        {/* <ServiceSection /> */}
        <CoreFeature />
        <WorkFlow />
        <Package />
        {/* <TeamSection /> */}
      </Layout>
    </ThemeProvider>
  );
}
