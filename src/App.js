import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchDog = this.fetchDog.bind(this);
    this.state = {
      objDog: undefined,
    }
  }

  async fetchDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await request.json()
    this.setState({
      objDog: response
    })
  }
  
  componentDidMount() {
    this.fetchDog();
  }

  renderDog() {
    // const { objDog } = this.state
    // const url = objDog ? objDog.message : ''
    return(
      <div className='containerDog'>
        <img className='picture' src={this.state.objDog.message} alt='doguinho'/>
        <button type='button' onClick={this.fetchDog}>Novo Doguinho</button>
      </div>
    )
  }

  
  render() {
    const { objDog } = this.state;
    const elementLoading = <span>Loading...</span>
    return (
      <div>
        {objDog ? this.renderDog() : elementLoading}
      </div>
    );
  }
}

export default App;
