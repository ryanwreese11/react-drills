import React, { Component } from 'react'

export class Input extends Component {
   constructor(){
       super()
       this.state ={
           input: '',
    }
    }

    handleChange(value){
        this.setState ({input: value})
    }
  
    render() {
    return (
      <div>
        <input onChange={ e => this.handleChange(e.target.value)}/>
        <h1>{this.state.input}</h1>
      </div>
    )
  }
}

// export default Input


// import React, { Component } from 'react'

// export class ArrayList extends Component {
  
//     constructor(){
//         super ()
        
//         this.state = {
//             array: ['ryan', 'pineapple', 'DevMountain', 'chair', 'baseball'],
//         }
//     }

//     updateArray(){
//         let display = this.state.array.map((value) => {
//             return <div key= {value}>{value}</div>
//         })
//         return display
        
//         }

 
    
//     render() {
//     return (
//       <div>
//         <h1>{this.updateArray()}</h1>
        


//       </div>
//     )
//   }
// }

// export default ArrayList

