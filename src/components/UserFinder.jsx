import { Component, Fragment } from "react";
import { UsersContext } from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: '' };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(user =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="my-8 mx-auto bg-white p-4 rounded-sm max-w-md text-center">
          <label htmlFor="user">Search </label>
          <input type="search" onChange={this.searchChangeHandler} className="border border-red-300" />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;