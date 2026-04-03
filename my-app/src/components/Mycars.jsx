import { Component } from 'react';
import Cars from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

export class Mycars extends Component {
  state={
    cars:['Toyota', 'Renault', 'Peugeot'],
  }
  render() {
    return (
      <div>
        <Wrapper> 
            <MyHeader
            myStyle={this.props.cocolor}> 
          {/* <h1 style={{color: this.props.cocolor}} > {this.props.tititre}</h1> */}
              {this.props.tititre}
            </MyHeader>
          </Wrapper>
          {/* <h1>Mon Catalogue de voiture</h1> */}
        <Cars color="red">{this.state.cars[0]}</Cars>
        <Cars color="blue">Renault </Cars>
        {/* Les deux lignes ci dessous sont équivalent la première on passe par le props et la deuxième on écrit en dur la marque de la voiture */}
        <Cars color="green">{this.state.cars[2]} </Cars>
      </div>
    )
  }
}

export default Mycars;
