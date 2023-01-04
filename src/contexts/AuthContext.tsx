import Router from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

type User = {
    username: string;
}

type SignInCredentials = {
    username: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials): Promise<void>;
    user: User;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    async function signIn({ username, password }: SignInCredentials) {
        try {
            const response = await api.post('/ead-authuser/auth/login', {
                username,
                password
            })

            setUser({username})

            Router.push('/dashboard')

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}