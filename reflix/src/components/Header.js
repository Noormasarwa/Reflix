import React, { Component } from 'react'
import Movie from './Movie'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            searchValue:'',
            searchedMovies:[]
        }
    }

    changeValue = (e) => {
        this.setState({
            searchValue:e.target.value
        })
    }

    searchForMovies =()=> {
        const movies = this.props.movies.map(v => {return  v.title.includes(this.state.searchValue)})
        this.setState ({
            searchedMovies: movies
        })
    }

    render() {
        const budget = this.props.budget
        return (
            <ul>
                <input type="text" value ={this.state.searchValue} onChange ={this.changeValue}/>
                <button>search</button>
                <div onClick ={this.searchForMovies}>Budget :{budget}</div>
                <div id="searchedMovies">
                    {this.state.searchedMovies.length > 0 ?this.state.searchedMovies.map(v => <Movie key = {v.id} movie ={v} />) : ''}
                </div>
            </ul>
        )
    }
}

export default Header;
