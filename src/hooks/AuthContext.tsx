import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import app from '../constants/app';

import {
  AuthContextData,
  AuthState,
  ResponseSession,
} from '../interfaces/auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`${app.prefixLocalStorage}Token`);
    const user = localStorage.getItem(`${app.prefixLocalStorage}User`);

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const sigIn = useCallback(async ({ email, password }) => {
    const response = await api.post<ResponseSession>('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(`${app.prefixLocalStorage}Token`, token);
    localStorage.setItem(`${app.prefixLocalStorage}User`, JSON.stringify(user));
    setData({ token, user });
  }, []);

  const sigOut = useCallback(() => {
    localStorage.removeItem(`${app.prefixLocalStorage}Token`);
    localStorage.removeItem(`${app.prefixLocalStorage}User`);

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ sigIn, sigOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within an AuthProvider');
  }

  return context;
}
