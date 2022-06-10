/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({}) {
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
      {...rest}
    >
      <Image src={src} alt="spa web - hassannaftabb -logo img" />
    </Link>
  );
}
