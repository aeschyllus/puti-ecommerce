import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <div className="font-opensans">
      <Head>
        <title>Puti</title>
      </Head>

      <Nav />

      <main className="pt-14">{children}</main>

      <Footer />
    </div>
  );
}
