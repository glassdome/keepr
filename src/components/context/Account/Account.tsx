import React, { createContext, ReactNode } from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import Pool from '../../../auth/UserPool';

export type AuthFunction = (email: string, password: string) => Promise<CognitoUserSession>
export type SessionFunction = () => Promise<CognitoUserSession>
export type LogoutFunction = () => void;

interface AccountContextType {
  authenticate?: AuthFunction
  getSession?: SessionFunction
  logout?: LogoutFunction
}

const AccountContext = createContext<AccountContextType>({});

interface AccountProps {
  children: ReactNode
}

const Account = ({ children }: AccountProps) => {
  
  const getSession = async (): Promise<CognitoUserSession> => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err: Error | null, session: CognitoUserSession | null) => {
          if (err) {
            reject();
          } else {
            if (session)
              resolve(session);
          }
        });
      } else {
        reject();
      }
    })
  };

  const authenticate = async (Username: string, Password: string): Promise<CognitoUserSession> => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });
  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess: ', data);
          resolve(data);
        },
        onFailure: (err) => {
          console.error('onFailure: ', err)
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data);
          resolve(data);
        }
      });          
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {children}
    </AccountContext.Provider>
  )
};
export { Account, AccountContext };