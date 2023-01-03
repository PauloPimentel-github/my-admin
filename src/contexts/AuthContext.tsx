import { createContext, ReactNode } from 'react'
import { api } from '../services/api'

type SignInCredentials = {
    username: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials): Promise<void>;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const isAuthenticated = false;

    async function signIn({ username, password }: SignInCredentials) {
        try {
            const response = await api.post('/ead-authuser/auth/login', {
                username,
                password
            })

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}