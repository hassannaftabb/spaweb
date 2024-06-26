/** @jsx jsx */
import { jsx, Container, Flex, Button, Heading } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import Logo from 'components/logo';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <div style={styles.socials}>
          <a href="https://twitter.com">
            <FaXTwitter
              style={{
                color: '#DC1FFF',
              }}
            />
          </a>
          <a href="https://telegram.com">
            <FaTelegramPlane style={{ color: '#DC1FFF' }} />
          </a>
        </div>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#ocf',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 4,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
        fontWeight: '900',
        fontSize: 6,
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
  logo: {
    fontSize: 8,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    gap: '22px',
  },
};
