import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './styles.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return <Component {...pageProps} />;
}
