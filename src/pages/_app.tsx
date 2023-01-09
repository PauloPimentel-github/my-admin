import type { AppProps } from 'next/app'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { AuthProvider } from '../contexts/AuthContext'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SidebarDrawerProvider>
        <ChakraBaseProvider theme={theme}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ChakraBaseProvider>
      </SidebarDrawerProvider>
  )
}

export default MyApp
