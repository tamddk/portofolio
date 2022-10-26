import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portofolio - Sodik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main>
        <Header title="Welcome to my portfolio" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main> */}
      <main>
        <div className="container">
          <div className="row">
            <div className="col">LEFT</div>
            <div className="col">RIGHT</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
