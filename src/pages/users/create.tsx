import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'

import Link from 'next/link'

import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('E-mail é inválido'),
    password: yup.string().required('Senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    //await createUser.mutateAsync(values);
    await new Promise(resolve => setTimeout(resolve, 2000));

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box 
          as='form' 
          flex='1' 
          borderRadius={8} 
          bg='gray.800' 
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
            <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

            <Divider my='6' borderColor='gray.700' />

            <VStack spacing='4'>
                <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                    <Input 
                        name='name' 
                        label='Nome completo' 
                        {...register('name')}
                    />
                    
                    <Input 
                        name='email' 
                        type='email' 
                        label='E-mail' 
                        {...register('email')}
                    />
                </SimpleGrid>

                <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                    <Box color='red.300'>
                        <ErrorMessage errors={errors} name='name' />
                    </Box>
                    <Box color='red.300'>
                        <ErrorMessage errors={errors} name='email' />
                    </Box>
                </SimpleGrid>

                <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                    <Input 
                        name='password' 
                        type='password' 
                        label='Senha'
                        {...register('password')} 
                    />

                    <Input 
                        name='password_confirmation' 
                        type='password' 
                        label='Confirmação da senha' 
                        {...register('password_confirmation')} 
                    />
                </SimpleGrid>

                <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                    <Box color='red.300'>
                        <ErrorMessage errors={errors} name='password' />
                    </Box>
                    <Box color='red.300'>
                        <ErrorMessage errors={errors} name='password_confirmation' />
                    </Box>
                </SimpleGrid>

            </VStack>

            <Flex mt='8' justify='flex-end'>
                <HStack spacing='4'>
                    <Button as={Link} href='/users' colorScheme='whiteAlpha'>Cancelar</Button>
                    <Button type='submit' colorScheme='purple' isLoading={formState.isSubmitting}>
                        Salvar
                    </Button>
                </HStack>
            </Flex>
        </Box>
      </Flex>
    
    </Box>
  );
}