import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
        This is the weather component
        <br />
        <br />
        {this.props.city && this.props.country && <p> Location: {this.props.city},{this.props.country}</p>}
        {this.props.temp && <p> Temperature:{this.props.temp}</p>}
        {this.props.humidity && <p> Humidity : {this.props.humidity}</p>}
        {this.props.description && <p>Description:{this.props.description}</p>}
        {this.props.error && <p> {this.props.error}</p>}
      </div>
    )
  }
}

export default Weather;
