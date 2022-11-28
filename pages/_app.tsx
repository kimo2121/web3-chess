import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  console.log(pathname);
  return (
    <div
      className={
        pathname === "/games/joined-game" || pathname === "/games/spectate"
          ? "app-black"
          : "app-bg bg-white"
      }
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
