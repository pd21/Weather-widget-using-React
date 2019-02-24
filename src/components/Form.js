import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
           <br/>
           <input type="text" name="country" placeholder="Enter name of country"/>
           <br />
           <input type="text" name="city" placeholder="Enter name of city"/>
           <br />
           <button >Submit</button>
      </form>
    )
  }
}

export default Form;
