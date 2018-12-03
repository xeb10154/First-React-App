import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{

  render(){

    const mapNodes = this.props.data.map(film => {
      return(
        <Film
        title={film.name} url={film.url}>
        {film.name}
        </Film>
      );
    })

    return (
      <>
      <h1>Upcoming Film Releases for UK</h1>
        <div className="Film-List">
          <ul>
            {mapNodes}
          </ul>
        </div>
      </>
    )
  }
}


export default FilmList;
