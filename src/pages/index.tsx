import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center'
      justify='center' 
    >
      <Flex 
        as='form' 
        width='100%'
        maxWidth={360}
        bg='gray.800'
        boxShadow='dark-lg' 
        rounded='md'
        p='8'
        flexDir='column'
      >
        <Stack spacing='4'>
          <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input 
              id='email'
              type='email' 
              name='email' 
              focusBorderColor='purple.500'
              bgColor='gray.900'
              variant='filled'
              size='lg'
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input 
              id='password'
              type='password' 
              name='password' 
              focusBorderColor='purple.500'
              bgColor='gray.900'
              variant='filled'
              size='lg'
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
        </Stack>

        <Button 
          type='submit' 
          mt='6' 
          colorScheme='purple'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
