import { Component } from "react";
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'test'
    }
  }

  componentDidUpdate() {
    const {users} = this.props;
    if (users.length === 0) {
      throw new Error('No users provided!')
    }
  }

   toggleUserHandler = () => {
    this.setState(curState => ({
      showUsers: !curState.showUsers,
    }))
  }

  render() {
    const usersList = (
      <ul className="list-none m-0 p-0">
        {this.props.users.map(user => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    )

    return (
      <div className="my-8 mx-auto bg-white p-4 rounded-sm max-w-md text-center">
        <button onClick={this.toggleUserHandler} className="cursor-pointer bg-red-600 text-white border border-red-600 rounded-sm py-0.5 px-8 hover:bg-red-600 hover:border-red-600 ">
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
export default Users;