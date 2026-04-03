import './App.css';
import { Component } from 'react';
import Mycars from './components/Mycars'

class App extends Component {
  state = {
    titre: 'Mon catalogue de voitures',
    color: '#c2343467',
  }
  render(){
    return (
      <div className="App">

        <Mycars
          tititre={this.state.titre}
          cocolor={this.state.color}
        />
      </div>
    )
  }
}

export default App;
