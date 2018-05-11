import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    }
    this.updateName = this.updateName.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updateCity = this.updateCity.bind(this)
    this.updateState = this.updateState.bind(this)
    this.updateZipcode = this.updateZipcode.bind(this)
    this.createHouse = this.createHouse.bind(this)
    
  }

  updateName(e){
    this.setState({
      name: e.target.value
    })
  }

  updateAddress(e){
    this.setState({
      address: e.target.value
    })
  }

  updateCity(e){
    this.setState({
      city: e.target.value
    })
  }

  updateState(e){
    this.setState({
      state: e.target.value
    })
  }

  updateZipcode(e){
    this.setState({
      zipcode: e.target.value
    })
  }

  createHouse(){
    const {name, address, city, state, zipcode} = this.state
    axios.post('/api/houses', {name, address, city, state, zipcode})
      .then(res => {
        window.location = '/'
      })
  }






  render(){

    return(
      <div>
        Wizard
        <input type="text"
                placeholder='Property Name'
                onChange={this.updateName}/>
        <input type="text"
                placeholder='Address'
                onChange={this.updateAddress}/>
        <input type="text"
                placeholder='City'
                onChange={this.updateCity}/>
        <input type="text"
                placeholder='State'
                onChange={this.updateState}/>
        <input type="text"
                placeholder='Zipcode'
                onChange={this.updateZipcode}/>
                <button onClick={this.createHouse}>Complete</button>
                
        <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}