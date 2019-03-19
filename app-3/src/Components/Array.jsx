import React, { Component } from 'react'

export class Array extends Component {
  
  constructor (){
      super()

    this.state = {
        userInput: '',
        arr: ['apples', 'oranges', 'chair', 'light pole', 'cow'],
        
    }

  }


  

  handleChange(value){
      this.setState({
          userInput: value
      })
  }
  
  filterArray = () => {
      let filter = this.state.arr.filter(val => {
      return val.includes(this.state.userInput)
      }).map(val => <h2>{val}</h2>)
      return filter
  }
  
  
    render() {
    return (
      <div>
        <input onChange={(e)=> this.handleChange(e.target.value)}></input>
        <div>{this.filterArray()}</div>
        
      </div>
    )
  }
}

export default Array
