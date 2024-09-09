import { Provider } from "react-redux";
import store from "../../store/using-redux-toolkit/store";
import UserForm from "../../components/using-redux-toolkit/UserForm";
import UserList from "../../components/using-redux-toolkit/UserList";

const UsersCrudUsingReduxToolKit = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h1>User Management System</h1>
          <UserForm />
          <UserList />
        </div>
      </Provider>
    </div>
  );
};

export default UsersCrudUsingReduxToolKit;
