import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'
import '../Dashboard/Dashboard.css'


export default class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      houses: []
    }
    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount(){
    axios.get('/api/houses')
      .then(res => {
        this.setState({
          houses: res.data
        })
      })
  }

  deleteHouse(id){
    axios.delete(`/api/houses/${id}`)
      .then( res => {
        this.componentDidMount()
      })
  }





  render(){
    let housesDisplay = this.state.houses.map(house => 
      <House  key={house.id}
              deleteMethod={this.deleteHouse}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zipcode={house.zipcode}
              id={house.id}
              />    
    )
    return(
      <div>
        <div className='dashHeader'>
          Dashboard
        </div>
        <Link to='/wizard'><button>Add New Property</button></Link>
        {housesDisplay}
      </div>
    )
  }
}