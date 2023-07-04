import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/lmm.css";
import "@/styles/om-oss.css";
import "@/styles/vlog-reveal.css";
import "@/styles/medlemmar.css";
import "@/styles/gallery.css";
import "@/styles/movies.css";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const router = useRouter();

  const showNav = !["/start", "/"].includes(router.asPath);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Morgonmysboisen</title>
        <meta name="description" content="Morgonmysboisens skattjakt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </Head>
      {/* <>
        {showNav && (
          <nav>
            <Link href={"/start"} className={router.asPath == "/" ? "active" : ""} id="start">
              Start
            </Link>
            <div className={`nav-links ${menuOpen ? "open" : "closed"}`}>
              <Link href={"/lmm1"} className={router.asPath == "/lmm1" ? "active" : ""}>
                LMM1
              </Link>
              <Link href={"/lmm2"} className={router.asPath == "/lmm2" ? "active" : ""}>
                LMM2
              </Link>
              <Link href={"/lmm3"} className={router.asPath == "/lmm3" ? "active" : ""}>
                LMM3
              </Link>
              <Link href={"/smm"} className={router.asPath == "/smm" ? "active" : ""}>
                SMM
              </Link>
              <Link href={"/movies"} className={router.asPath == "/movies" ? "active" : ""}>
                Övriga filmer
              </Link>
              <Link href={"/gallery"} className={router.asPath == "/gallery" ? "active" : ""}>
                Art gallery
              </Link>
              <Link href={"/medlemmar"} className={router.asPath == "/medlemmar" ? "active" : ""}>
                Medlemmar
              </Link>
            </div>
            <button
              className={`mobile-nav ${menuOpen ? "open" : "closed"}`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}>
              <i className="fa fa-bars" />
            </button>
          </nav>
        )}
      </> */}
      <Component {...pageProps} />
    </>
  );
}
