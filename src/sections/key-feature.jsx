/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import { PiCertificateDuotone } from 'react-icons/pi';
import { IoTimerOutline } from 'react-icons/io5';
import { BsGearWideConnected } from 'react-icons/bs';
import { MdOutlineSecurity } from 'react-icons/md';
const data = [
  {
    id: 1,
    imgSrc: <PiCertificateDuotone style={{ fontSize: 50 }} />,
    altText: 'Trust and Transparency',
    title: 'Trust and Transparency',
    text: 'SolanaKYC prioritizes trust and transparency within the Solana ecosystem. Our rigorous identity verification process ensures that project owners and contributors are legitimate, fostering trust among investors and stakeholders.',
  },
  {
    id: 2,
    imgSrc: <IoTimerOutline style={{ fontSize: 50 }} />,
    altText: 'Efficiency and Speed',
    title: 'Efficiency and Speed',
    text: 'We understand the importance of time in the fast-paced world of blockchain projects. With SolanaKYC, you can expect efficient and speedy verification processes, enabling you to focus on your project without unnecessary delays.',
  },
  {
    id: 3,
    imgSrc: <BsGearWideConnected style={{ fontSize: 50 }} />,
    altText: 'Customized Solutions',
    title: 'Customized Solutions',
    text: "Every Solana project is unique, and we recognize that. SolanaKYC offers tailored verification solutions to meet the specific needs of your project, whether you're launching a new token, conducting a token sale, or building a decentralized application.",
  },
  {
    id: 4,
    imgSrc: <MdOutlineSecurity style={{ fontSize: 50 }} />,
    altText: 'Security and Confidentiality',
    title: 'Security and Confidentiality',
    text: 'Your security and confidentiality are paramount to us. We utilize industry-leading encryption methods to safeguard your data. Rest assured that your information is safe with us.',
  },
];

export default function KeyFeature() {
  return (
    <section
      id="feature"
      sx={{ variant: 'section.KeyFeature' }}
      style={{
        zIndex: 999,
        background: 'black',
        position: 'relative',
        width: '100vw',
        padding: '90px 0px',
      }}
    >
      <Container sx={styles.container}>
        <SectionHeader
          slogan={
            <span style={styles.slogan}>
              At SolanaKYC, we understand the critical role that{' '}
              <span style={styles.highlight}>trust and transparency</span> play
              in the <span style={styles.highlight}>Solana ecosystem</span>. As
              the premier <span style={styles.highlight}>external agency</span>{' '}
              specializing in{' '}
              <span style={styles.highlight}>identity verification</span>, we
              offer unparalleled expertise and dedication to ensuring the
              integrity of Solana projects.
            </span>
          }
          title="Why?"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  container: {
    pt: 150,
  },
  slogan: {
    fontWeight: 'bold',
  },
  highlight: {
    fontSize: 24,
    color: '#DC1FFF',
  },
};
