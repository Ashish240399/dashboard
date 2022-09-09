import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const findUser = (data) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ user, findUser }}>
      {children}
    </UserContext.Provider>
  );
};
