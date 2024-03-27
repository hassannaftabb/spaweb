/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoImage from 'assets/logomain.webp';
export default function Logo({ src }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        height: 100,
      }}
    >
      <Image src={LogoImage} alt="spa web - hassannaftabb -logo img" />
    </Link>
  );
}
