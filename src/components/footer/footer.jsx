/** @jsx jsx */
import Logo from 'components/logo';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerBottomArea} className="fba">
        <div style={styles.left}>
          <Logo />
          <p>
            Disclaimer: SolanaKYC is an independent community project focused on
            bringing fairness and transparency to the Solana ecosystem. We are
            not affiliated with the Solana brand, and the Solana name and logo
            are the property of their respective owners. Our mission is to
            provide identity verification services for project owners to help
            ensure trust and legitimacy within the Solana community.
          </p>
          <div style={styles.socials}>
            <a href="https://twitter.com">
              <FaXTwitter
                style={{
                  color: '#fff',
                }}
              />
            </a>
            <a href="https://telegram.com">
              <FaTelegramPlane
                style={{
                  color: '#fff',
                }}
              />
            </a>
          </div>
        </div>
        <div style={styles.right}>
          <h3>Legal</h3>
          <a href="#" style={styles.right.a}>
            Terms
          </a>
          <a href="#" style={styles.right.a}>
            Cookies & Policy
          </a>
          <a href="#" style={styles.right.a}>
            Disclaimer
          </a>
        </div>
        {/* <Text sx={styles.footer.copyright}>
          Copyright {new Date().getFullYear()} by SolanaKYC
        </Text> */}
      </Box>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    a: {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  footer: {
    width: '100vw',
    footerBottomArea: {
      // display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      // flexDirection: 'column',
      backgroundImage: 'linear-gradient(45deg, #dc1fff, #03e1ff)',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1,1fr)',
        null,
        'repeat(2,1fr)',
        null,
        'repeat(2,1fr)',
      ],
      padding: '10px 15px',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    gap: '22px',
  },
};
