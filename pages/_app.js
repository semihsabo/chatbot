// pages/_app.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Component {...pageProps} />
      {!isAdminPage && <Footer />}
    </>
  );
}
