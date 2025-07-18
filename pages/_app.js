import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // admin sayfalarında navbar ve footer gösterme
  const isAdminRoute = router.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Component {...pageProps} />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default MyApp;
