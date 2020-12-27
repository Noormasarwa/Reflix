
import React, { Component } from 'react'
import Movie from './Movie'
import Header from './Header'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      searchedMovies: []
      , userName: null
    }
  }



  render() {
    return (
      <div>
        <Header budget={this.props.user.Budget || 0} name={this.props.user.name} movies={this.props.movies} />
        <div id="favorite">
          <div>
            Favorites:
           </div>
          {this.props.user.movies.length > 0 ? this.props.user.movies.map(v => <Movie key={v.id} movie={v} username={this.props.user.name} addToRented={this.props.addToRented} />) : ''}
        </div>
        <div id="catalog">
          {this.props.movies.map(v => <Movie key={v.id} movie={v} username={this.props.user.name} addToRented={this.props.addToRented} />)}
        </div>
      </div>
    )
  }
}

export default Home;
