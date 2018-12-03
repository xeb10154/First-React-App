import React, {Component} from 'react';

class Button extends Component{
  render(){
    return(
      <h2 id="btn"><a href={this.props.moreLink}>View more upcoming releases >> </a></h2>
    )
  }
}

export default Button;
