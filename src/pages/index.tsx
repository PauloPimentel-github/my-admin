import { Flex, Button, Stack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center'
      justify='center' 
    >
      <motion.div 
        className='box'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
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
            <Input type='email' name='email' label='E-mail' />
            <Input type='password' name='password' label='Senha' />
          </Stack>

          <Button 
            type='submit' 
            mt='6' 
            colorScheme='purple'
          >
            Entrar
          </Button>
        </Flex>
      </motion.div>
    </Flex>
  )
}
