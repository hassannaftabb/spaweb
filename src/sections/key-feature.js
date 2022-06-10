/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text: 'These SPAs are quick responsing, fast & dynamic.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Responsive',
    title: 'Responsive',
    text: 'Nowadays, websites are meant to be responsive. That what my SPAs are filled with. "Responsiveness"',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Scalable',
    title: 'Get Services',
    text: 'These SPAs are best for business portofolios or just for getting your company an Online Face!',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Custom UI',
    title: 'Custom UI',
    text: 'Customize your website according to your requirements!',
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: 'section.KeyFeature' }}>
      <Container sx={styles.container}>
        <SectionHeader slogan="What I Offer!" title="Checkout My Products" />
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
};
