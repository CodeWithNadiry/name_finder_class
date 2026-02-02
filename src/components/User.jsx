import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log('user will unmount')
  }

  render() {
    return (
      <li className="m-4 font-bold">
       {this.props.name} 
      </li>
    )
  }
}

export default User;