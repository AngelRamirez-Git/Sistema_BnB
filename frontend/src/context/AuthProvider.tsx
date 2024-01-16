import React, { createContext, useState, Dispatch, SetStateAction} from "react";
import { User } from '../types/user';

type Props = {
    children?: React.ReactNode;
}

interface AuthContextInterface {
    auth: any
    setAuth: Dispatch<SetStateAction<any>>
}

const AuthContext = createContext<AuthContextInterface>({
    auth: null,
    setAuth: () => {}
});

export const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState<any>()

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext;