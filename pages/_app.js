import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';   // <‑‑ yeni satır

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />          {/* <‑‑ footer’ı ekledik */}
    </>
  );
}

export default MyApp;
