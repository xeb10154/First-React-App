import React, {Component} from 'react';

class Film extends Component{

  render(){
    return (
      <li><a href={this.props.url}>{this.props.title}</a></li>
    )
  }


}

export default Film;
