import React, {Component} from 'react';

class Compteur extends Component {
  constructor(props) {
    super(props);
    // Initialisation du state
    this.state = { valeur: 0 };
  }

  incrementer = () => {
    // Mise à jour de l'état
    this.setState({ valeur: this.state.valeur + 1 });
  }

  render() {
    return (
      <div>
        <p>Compteur : {this.state.valeur}</p>
        <button onClick={this.incrementer}>+1</button>
      </div>
    );
  }
}

export default Compteur;