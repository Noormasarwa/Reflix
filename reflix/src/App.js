
import './App.css';
import React, { Component } from 'react'
import Users from './components/Users'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Movie from './components/Movie'
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: {
        Username: "Johny",
        isLogged: false
      },
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users: [
        { name: "Johny", Budget: 4500 ,movies:[]},
        { name: "Ronaldo", Budget: 3600000 ,movies:[]},
        { name: "Modric", Budget: 25 ,movies:[]},
        { name: "Noor Masarwe", Budget: 3 ,movies:[]}
      ]
    }
  }


  logIn = (username) => {
    console.log(username)
    const isLogeed = { ...this.state.isLoggedIn } //by value 
    isLogeed.Username = username
    isLogeed.isLogged = true
    this.setState({
      isLoggedIn: isLogeed
    })

  }

  addToRented =(username, movie) =>{
    if(!username || !movie){
      return
    }
    let users = [...this.state.users]
    const userFound = {...this.state.users.find(v => username === v.name)}
    if(!userFound){
      return
    }
    if(!userFound['movies']){
      userFound['movies'] = []
    }
    else{
      if(userFound['movies'].find(v => v.id === movie.id)){
        return
      }
    }
    userFound['movies'].push(movie)
    let updaateUser = users.findIndex(v => username === v.name)
    users[updaateUser] = userFound
    this.setState({
      users
    })
  }
  returnUserInfo = (username) => {
    const user = this.state.users.find(v => username === v.name)
    return user
  }

  render() {

    return (
      <Router>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
        <NavBar />
        <div id="links">

          <Route path='/' exact>
            <div>
              {
                this.state.isLoggedIn.isLogged ? <Home user={this.returnUserInfo(this.state.isLoggedIn.Username)} movies={this.state.movies}  addToRented = {this.addToRented}/>
                  :
                  <Users data={this.state.users} LogInUser={this.logIn} />
              }
            </div>
          </Route>
          <Route path='/catalog' exact render={() => <Home user={this.returnUserInfo(this.state.isLoggedIn.Username)} movies={this.state.movies} />} />
          <Route path='/catalog/:id' exact render={({match}) => <Movie movie={this.state.movies[match.params.id]} />} />
        </div>
      </Router>
    )
  }
}

export default App;
