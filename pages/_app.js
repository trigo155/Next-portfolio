// File where import css of all aplication and functionality that have relations with components
import 'bootswatch/dist/cyborg/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
    //This fragment of code is necessary for that aplication receives components
    //and passes them back.
  }


export default MyApp