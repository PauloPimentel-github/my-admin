import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default MyApp
