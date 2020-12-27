import React , {Component} from 'react'

class User extends Component{


  LogInUser =()=> {
      this.props.LogInUser(this.props.user.name)
  }

  render(){ 
    return (
  <div onClick ={this.LogInUser}>
     {this.props.user.name}
  </div>
    )
  }
}

export default User;
