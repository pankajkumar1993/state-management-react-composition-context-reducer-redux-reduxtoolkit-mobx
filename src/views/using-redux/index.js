import React from "react";
import { Provider } from "react-redux";
import store from "../../store/using-redux/store";
import UserForm from "../../components/using-redux/UserForm";
import UserList from "../../components/using-redux/UserList";

const UsersCrudUsingRedux = () => {
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

export default UsersCrudUsingRedux;
