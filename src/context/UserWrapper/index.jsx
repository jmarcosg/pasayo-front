import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { login, register, verifyToken } from './handlers';
import { removeSession, setSession } from '../../utils/auth';

export const UserContext = React.createContext();

export const useUserAuth = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useAuth must be used within a AuthProvider');

  return context;
};

export const UserWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await register(user);

      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      //   console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const res = await login(user);

      Cookies.set('token', res.data.token);
      setUser(res.data);
      setSession(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    removeSession();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);

        return;
      }

      try {
        const res = await verifyToken(cookies.token);
        console.log(res);

        if (!res.data) return setIsAuthenticated(false);

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
