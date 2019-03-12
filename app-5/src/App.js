import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image='https://images.unsplash.com/photo-1533072167040-48bc3b8cc060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
      </div>
    );
  }
}

export default App;
