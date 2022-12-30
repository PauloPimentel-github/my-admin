import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import AppRoutes from '../Routes/AppRoutes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
      {/* <AppRoutes /> */}
    </ChakraBaseProvider>
  )
}

export default MyApp
