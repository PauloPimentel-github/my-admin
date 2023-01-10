import Link from 'next/link'
import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w='100' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Button 
                            as={Link}
                            size='sm'
                            fontSize='sm'
                            colorScheme='purple'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                            title='Criar novo'
                            href='/users/create'
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='purple' />
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de cadastro</Th> }
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='purple' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Paulo Pimentel</Text>
                                        <Text fontSize='sm' color='gray.300'>paulo.h.g.pimentel</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>05 de Janeiro, 2023</Td> }
                                <Td>
                                    <Button 
                                        as={Link}
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='green'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                        title='Editar'
                                        href='#'
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    {/* <Pagination
                        totalCountOfRegisters={data.totalCount}
                        currentPage={page}
                        onPageChange={setPage} 
                    /> */}
                </Box>
            </Flex>
        </Box>
    )
}