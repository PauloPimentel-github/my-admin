import { Flex, Button, Stack, Image, Box } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { Input } from '../components/Form/Input'

import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const { signIn } = useContext(AuthContext)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submit:', values);

    const data = {
      email: values.email,
      password: values.password
    }

    await signIn(data);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Box>
            <Image
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              title='Dan Abramov'
              borderRadius='full'
              boxSize='50%'
              margin='auto'
            />
          </Box>
          <Input 
            type='email' 
            name='email' 
            label='E-mail' 
            {...register('email')}
          />
          <ErrorMessage errors={errors} name='email' />
          
          <Input 
            type='password' 
            name='password' 
            label='Senha' 
            {...register('password')}
          />
          <ErrorMessage errors={errors} name='password' />
          
        </Stack>

        <Button 
          type='submit' 
          mt='6' 
          colorScheme='purple'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
