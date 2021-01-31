import React, { Component } from 'react';
import './App.css';
import Pets from './Pets/Pets'
import Navbar from './Navbar/Navbar'
import {Route} from 'react-router-dom';
import Graphapi from './Graphapi/Graphapi';
import Petify from './Petify/Petify';
import Community from './Community/Community';
import Donate from './Donate/Donate';
class App extends Component {
  state={
    pets: [
      {name: 'DOGS', link: 'https://wallpaperaccess.com/full/266770.jpg'},
      {name: 'CATS', link: 'data:image/jpeg;base64,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'},
      {name: 'COWS', link: 'https://th.bing.com/th/id/OIP.HrAiTxQv-FqxEkB0k3tuAgHaE6?w=268&h=180&c=7&o=5&dpr=1.25&pid=1.7'},
      {name: 'GOATS', link: 'https://th.bing.com/th/id/R089ca11a590afa8ece6604a2b0fb714f?rik=m6FBQtOuW78qsQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-XK4ISxWQo9A%2fT_kep1D5M_I%2fAAAAAAAAAWA%2fvqYLFj1V1sc%2fs1600%2fDSC04562.JPG&ehk=S3Z1BxwDqkdsOtCh681elTSldwrJSg5WQL10xgN2kuM%3d&risl=&pid=ImgRaw'},
      {name: 'BIRDS', link: 'https://www.thehindu.com/migration_catalog/article12270303.ece/ALTERNATES/LANDSCAPE_615/12_YT_SPARROW'}
    ],
    particularPet: [
      {name: 'Whisker', type: 'DOG',age: 7,link:'https://images.unsplash.com/photo-1568572933382-74d440642117?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'},
      {name: 'Buzo', type: 'DOG',age: 12,link:'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
      {name: 'Purry', type: 'DOG',age: 5,link:'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    ]
  }

  render() {

    let pets =()=>(
      <div className="container">  
        <div className="row row-cols-3 mt-5">
        {
          this.state.pets.map((pet)=>{
            return <Pets type={pet.name} link={pet.link}/>
          })
        }
        </div>
        </div>
    );

    let xpet = ()=>(
      <div>
        <div className="container">
          <div className="row row-cols-3 mt-5">
            {
              this.state.particularPet.map((i)=>{
                return <Petify 
                  name = {i.name}
                  age = {i.age}
                  link = {i.link}
                />
              })
            }
          </div>
        </div>
      </div>
    );

    let comPost = ()=>(
      <div>
        <div className="Container">
          <div className="row mt-3">
            <Community 

            />
          </div>
        </div>
      </div>
    );
    return (
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={pets}></Route>
        <Route exact path='/graphapi' component=  {Graphapi}></Route>
        <Route exact path='/petify' component=  {xpet}></Route>
        <Route exact path='/community' component=  {comPost}></Route>
        <Route exact path='/donate' component=  {Donate}></Route>
      </div>
    );
  }
}

export default App;
