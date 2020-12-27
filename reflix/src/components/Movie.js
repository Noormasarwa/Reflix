import React , {Component} from 'react'

class Movie extends Component{


  addToFavorite = ()=>{
    this.props.addToRented(this.props.username, this.props.movie)
  }

  render(){ 
    return (
        <div className="movie">
            <div>
               <a href={`/catalog/${this.props.movie.id}`}>
               {this.props.movie.id} : {this.props.movie.title}
               </a>
            </div>
            <div className="movieImage">
              <img src={this.props.movie.img} alt =""/>
              <i onClick = {this.addToFavorite} class="fas fa-plus-circle"></i>
            </div>
        </div>
    )
  }
}

export default Movie;
