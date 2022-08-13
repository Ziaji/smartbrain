import React, { Component } from "react";
import './App.css';
import Navigation from "./components/navigation/Navigation.js";
import Logo from "./components/logo/Logo.js";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm.js";
import Rank from "./components/rank/Rank.js";
import Particle from "./components/particles/Particle.jsx";



class App extends Component {
  constructor() {
    super();
    this.state = {
      input:"",
    }
  }


  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("click");
  }

  render(){
    return (
      <div className="App">
        <Particle />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                {/*<FeceRecognition />*/}
      </div>
      );
  }

}

export default App;
