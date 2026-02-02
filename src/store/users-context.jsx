import { createContext } from "react";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// eslint-disable-next-line react-refresh/only-export-components
export const UsersContext = createContext({
  users: [],
});

const UsersContextProvider = ({ children }) => {
  return (
    <UsersContext.Provider value={{ users: DUMMY_USERS }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;