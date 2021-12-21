import '../styles/globals.css'
import Shop from "../components/layouts/shop";

function MyApp({ Component, pageProps }) {
  return (
      <Shop>
        <Component {...pageProps} />
      </Shop>
  )
}

export default MyApp
