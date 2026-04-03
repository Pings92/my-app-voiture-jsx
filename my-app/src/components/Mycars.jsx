import { Component } from 'react';
import Cars from './Cars';


export class Mycars extends Component {
  render() {
    return (
      <div>
       <h1> {this.props.titre}</h1>
        {/* <h1>Mon Catalogue de voiture</h1> */}
      <Cars color="red">Toyota </Cars>
      <Cars color="blue">Renault </Cars>
      <Cars color="green">Peugeot </Cars>
      </div>
    )
  }
}

export default Mycars;
