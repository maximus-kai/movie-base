import React  , {Component}from 'react';
import './App.css';
import CardList from "./Components/CardList";
import FruitsHeader from "./Components/FruitsHeader";
import {newinfo , imageinfo } from "./Components/fruitsbase";
import {robots} from "./Components/robots"
import Searchbar from "./Components/Searchbar"
import axios from "axios"



class App extends Component {


  constructor(){
    super()
    this.state = {
      robots:robots, 
      newinfo:newinfo,
      count:'',
      searchfield:'',
      results:[],
      selected:{}
    }
  }



   changecount = () =>{
    this.setState({
      count:imageinfo.length
    })
    }



  apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=f79e2e12" ;




  search = (event) =>{
    event.preventDefault()

    // if (event.key === "Enter"){
  axios(`${this.apiurl}&s=${this.state.searchfield}`)
  .then((theresult) => this.setState({results:theresult.data.Search}))
  .then((movies) => { console.log("the list contains the following: ",movies.data) } )
 .catch((error)=>{ console.log(error)});
  // }


  

  }
  handleinput = (event) =>{
    console.log(event.target.value)
    this.setState( prevState => {
      return { ...prevState, searchfield:event.target.value}
      
    })
    console.log(this.state.searchfield)
  }



  render(){
    
    return (
      <div >
          {/* component for the detail amount of cards */}
          <FruitsHeader count = {this.state.count} changecount = {this.changecount}/>
          <div className="container">
                {/* the serch bar component */}
        <Searchbar handleinput = {this.handleinput} search={this.search} changecount = {this.changecount}/>
          {/* division for the array of cards */}
              <div className="cards">
            {/* the component for array of cards */}
                  <CardList resultfromapi = {this.state.results} />
              </div>
          </div>
    </div>
    );
  }
}

export default App;
