import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'

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
        <>
            <h1>Dashboard: { user?.username }</h1>
        </>
    )
}