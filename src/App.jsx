import UserFinder from "./components/UserFinder";
import UsersContextProvider from "./store/users-context";

const App = () => {
  return (
    <UsersContextProvider>
      <UserFinder />
    </UsersContextProvider>
  );
};

export default App;