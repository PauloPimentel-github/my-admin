import { Flex } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'

import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            api.get(`/ead-authuser/users/${user?.userId}`)
            .then(response => console.log('Login Dashboard:', response))
            .catch(error => console.log(error));
        }
        
    }, [])
    
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
            </Flex>
        </Flex>
    )
}