import { useEffect, useState } from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import Pool from '../../../auth/UserPool';

type MaybeSession = CognitoUserSession | undefined;

export const useAuthProvider = () => {
  const [session, setSession] = useState<MaybeSession>();

  const getSession = async (): Promise<CognitoUserSession> => {
    if (session) {
      return new Promise((resolve, _) => resolve(session));
    }
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err: Error | null, session: CognitoUserSession | null) => {
          if (err) {
            reject();
          } else {
            if (session) {
              resolve(session);
              setSession(session);
            }
          }
        });
      } else {
        reject();
      }
    })
  };

  const signIn = async (Username: string, Password: string): Promise<CognitoUserSession> => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });
  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('signIn::onSuccess: ', data);
          resolve(data);
          setSession(data);
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

  const signOut = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      console.log('User Sign-Out', user);
      user.signOut();
      setSession(undefined);
    }
  };  

  useEffect(() => {
    getSession()
  }, []);

  return {
    signIn,
    signOut,
    getSession,
    setSession,
    session
  };
    
}