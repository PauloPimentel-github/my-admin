import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ChakraBaseProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraBaseProvider>
  )
}

export default MyApp
