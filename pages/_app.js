import Head from "next/head";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
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
  return (
    <>
      <Head>
        <title>Morgonmysboisen</title>
        <meta name="description" content="Morgonmysboisens officiella webbsida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
