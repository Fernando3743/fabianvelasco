import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div id="outer-container" className="h-full">
      <Header />
      <main id="page-wrap">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
