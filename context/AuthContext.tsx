import React, {
  useContext,
  createContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { auth } from '@/firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

interface UserType {
  email: string | null;
  uuid: string | null;
}

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserType>({
    email: null,
    uuid: null,
  });
  const [loading, setLoading] = useState<Boolean>(true);
  const userInfo = useRef();

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setCurrentUser({
      email: null,
      uuid: null,
    });
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser({
          email: user.email,
          uuid: user.uid,
        });
      } else {
        setCurrentUser({
          email: null,
          uuid: null,
        });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
