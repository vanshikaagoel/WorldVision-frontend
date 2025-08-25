/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (data: { username: string; email: string; password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('dashboard_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    console.log('🔄 Login attempt started for:', username);
    setIsLoading(true);
    
    try {
      console.log('📡 Making request to:', "http://127.0.0.1:8000/auth/login/");
      console.log('📤 Request data:', { username, password: '***' });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        signal: controller.signal,
        mode: 'cors', // explicitly set CORS mode
        credentials: 'omit', // don't send cookies for now
      });

      clearTimeout(timeoutId);
      console.log('📥 Response status:', res.status, res.statusText);
      console.log('📥 Response headers:', Object.fromEntries(res.headers.entries()));

      const data = await res.json();
      console.log('📥 Response data:', data);

      if (!res.ok) {
        console.error('❌ Login failed - Server responded with error:', data);
        return false;
      }

      const loggedInUser: User = {
        id: data.id || '',
        username: data.username || username,
        email: data.email || '',
        token: data.token || '',
      };

      console.log('✅ Login successful, user data:', { ...loggedInUser, token: '***' });

      setUser(loggedInUser);
      localStorage.setItem('dashboard_user', JSON.stringify(loggedInUser));
      if (loggedInUser.token) localStorage.setItem('dashboard_token', loggedInUser.token);

      return true;
    } catch (err) {
      console.error('💥 Login error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
        cause: err.cause
      });

      if (err.name === 'AbortError') {
        console.error('⏰ Request timed out');
      } else if (err.name === 'TypeError' && err.message.includes('fetch')) {
        console.error('🌐 Network error - likely CORS or connection issue');
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: { username: string; email: string; password: string }): Promise<boolean> => {
    console.log('🔄 Signup attempt started for:', data.username);
    setIsLoading(true);
    
    try {
      console.log('📡 Making request to:', "http://127.0.0.1:8000/auth/signup/");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch("http://127.0.0.1:8000/auth/signup/", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
        mode: 'cors',
        credentials: 'omit',
      });

      clearTimeout(timeoutId);
      console.log('📥 Signup response status:', res.status, res.statusText);

      const result = await res.json();
      console.log('📥 Signup response data:', result);

      if (!res.ok) {
        console.error('❌ Signup failed:', result);
        return false;
      }

      console.log('✅ Signup successful');
      return true;
    } catch (err) {
      console.error('💥 Signup error:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    console.log('👋 User logged out');
    setUser(null);
    localStorage.removeItem('dashboard_user');
    localStorage.removeItem('dashboard_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};