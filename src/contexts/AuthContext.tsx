import Router from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { api } from '../services/api'
import jwtDecode from 'jwt-decode'

type User = {
    userId: string;
    username: string;
}

type Token = {
    sub: string;
    roles: string;
    exp: number;
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

    useEffect(() => {
        const { 'my-admin.token': token } = parseCookies()

        if (token) {
            const decoded = jwtDecode<Token>(token)

            api.get(`/ead-authuser/users/${decoded?.sub}`).then(response => {
                const { userId, username } = response.data;
                
                setUser({ userId, username })
            })
        }
    }, [])

    async function signIn({ username, password }: SignInCredentials) {
        try {
            const response = await api.post('/ead-authuser/auth/login', {
                username,
                password
            })

            const { token } = response.data;

            const decoded = jwtDecode<Token>(token)
              
            const userId = decoded.sub;

            setCookie(undefined, 'my-admin.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setUser({ userId, username })

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

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