import { Flex, Input, Button, Stack, FormLabel, FormControl, Image } from '@chakra-ui/react'

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
        maxWidth={460}
        bg='gray.800'
        boxShadow='4px 4px 8px 4px #4B4D63' 
        rounded='md'
        p='8'
        flexDir='column'
      >
        <Stack spacing='4'>
          <div>
            <Image
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              title='Dan Abramov'
              borderRadius='full'
              boxSize='50%'
              margin='auto'
            />
          </div>
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
