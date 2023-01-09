import '../styles/globals.css'
import Navbar from './components/Navbar'
import "../styles/home.css"
import {ChakraProvider} from "@chakra-ui/react"


export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  ) 
}
