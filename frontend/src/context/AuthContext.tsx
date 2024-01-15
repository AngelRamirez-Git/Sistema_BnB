import { createContext, useState, useContext } from 'react';
import { loginRequest } from '../api/user.api';
import { User } from '../types/user';

export const AuthContext = createContext<any>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("dadmka");
    return context;
}

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null);

    const signIn = async (user: any) => {
        const res = await loginRequest(user);
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                user
            }}
        >
            {children}
            {children}
        </AuthContext.Provider> 
    );
};
