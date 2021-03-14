import { createContext, useContext, ReactNode } from 'react';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { useAuthProvider } from './useAuthProvider';

export type AuthFunction = (email: string, password: string) => Promise<CognitoUserSession>
export type SessionFunction = () => Promise<CognitoUserSession>
export type LogoutFunction = () => void;

interface AuthProps {
  children: ReactNode
}

interface AuthContextType {
  signIn: AuthFunction,
  signOut: () => void,
  getSession: SessionFunction,
  setSession: (s: CognitoUserSession) => void,
  session?: CognitoUserSession
}

const authContext = createContext<Partial<AuthContextType>>({});

const AuthProvider = ({ children }: AuthProps) => {
  const auth = useAuthProvider();
  return (
    <authContext.Provider value={auth}>{ children }</authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext);
}

export default AuthProvider;
