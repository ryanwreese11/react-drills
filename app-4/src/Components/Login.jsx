import React, { Component } from 'react'

export class Login extends Component {
  constructor (){
      super ()

      this.state = {
          userInput1: '',
          userInput2: ''
      }
  }
  
  onChange1(val){
      this.setState({
          userInput1: val
        })
    }
        
  onChange2(val){
        this.setState({
            userInput2: val
        })
    }

    handleClick = () => {
        alert(`Username: ${this.state.userInput1} Password: ${this.state.userInput2}`)
    }
  
  
    render() {
    return (
      <div>
        <input type="text" placeholder='username'onChange={(e) => this.onChange1(e.target.value)}/>
        <input type="text" placeholder='password'onChange={(e) => this.onChange2(e.target.value)}/>
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    )
  }
}

export default Login
