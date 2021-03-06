import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";

import { Provider } from "react-redux";
import { store } from "../state";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
