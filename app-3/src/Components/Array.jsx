import React, { Component } from 'react'

export class Array extends Component {
  
  constructor (){
      super()

    this.state = {
        userInput: '',
        arr: ['apples', 'oranges', 'chair', 'light pole', 'cow'],
        filteredArr: []
    }

  }

  displayArray(){
      let display = this.state.arr.map((value) => <h2> {value} </h2>)
      return display
  }

  handleChange(value){
      this.setState({
          userInput: value
      })
  }
  
  filterArray = () => {
      let filter = this.state.arr.filter(val => {
      return val.startsWith(this.state.userInput)
      }).map(val2 => <h2>{val2}</h2>)
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
