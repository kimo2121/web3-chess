import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="app-bg">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default MyApp;
