import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const { children } = props;
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    console.log(loggedUser);
  }, [loggedUser])

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthContextProvider');
  }
  return context;
}

export { AuthProvider, useAuthContext };
