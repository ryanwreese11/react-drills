import React, { Component } from 'react'

export class ArrayList extends Component {
  
    constructor(){
        super ()
        
        this.state = {
            array: ['ryan', 'pineapple', 'DevMountain', 'soccer', 'baseball'],
        }
    }

    updateArray(){
        let display = this.state.array.map((value) => {
            return <div key= {value}>{value}</div>
        })
        return display
        
        }

 
    
    render() {
    return (
      <div>
        <h1>{this.updateArray()}</h1>
        


      </div>
    )
  }
}

export default ArrayList
