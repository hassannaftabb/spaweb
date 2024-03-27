/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import myImg from 'assets/myImg.jpg';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    imgSrc: myImg,
    altText: 'Hassan Aftab',
    title: 'Hassan Aftab',
    designation: 'CEO and Founder/Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/hassannaftabb',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://www.twitter.com/hassannaftabb?t=DFzpAcp3ABinrnMX7K6k5w&s=09',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/heyitshassann',
        icon: <FaInstagram />,
      },
      {
        id: 3,
        name: 'Linkedin',
        path: 'https://www.linkedin.com/in/hassan-aftab-3a0a87203',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'GitHub',
        path: 'https://www.github.com/hassannaftabb',
        icon: <FaGithub />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="team-section">
      <Container>
        <SectionHeader
          slogan="About Developer!"
          title="Full Stack Web & Mobile App Developer"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
  },
};
