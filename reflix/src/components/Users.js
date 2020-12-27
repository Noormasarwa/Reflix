
import React , {Component} from 'react'
import User from './User'
class Users extends Component{

  render(){
      const users = this.props.data
    return (
  <div>
      <div>
          Who's Watching?
      </div>
      {users.map(
          v => 
          <User key ={v.name} user ={v} LogInUser ={this.props.LogInUser}/>
      )}
  </div>
    )
  }
}

export default Users;
