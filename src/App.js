import React, { Component } from "react";
import CopyButton from "./copyButton";
import GenerateHtml from './components/generateHtml'





class App extends Component{

  state = {
    html : "html",
    reviewsNameColor : "red",
    styles : "padding-top: 30px;"

  }
  
  getHtml=(data)=>{
    this.setState({
      html : data
    })
    console.log(data)
  }

  sendHtmlToState= (event)=>{
    this.setState({
      html : event
    })
    console.log(event)
  }


  render(){
    return(
    <div style={{ width: '50%', height: '300px', margin :'3em auto', padding : '3em' }}>
      < CopyButton text={this.state.html}/>
      < GenerateHtml 
      getHtml ={this.getHtml}
      reviewsColor={this.state.reviewsNameColor}
      styles={this.state.styles}
      sendHtmlToState = {this.sendHtmlToState}
      />
     
      
    </div>

)}
};

export default App;