import { Component } from 'react';
import Exo6Toto from './Exo6Toto';
import Form from './Form';


class Exo6Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = (m) => {
            this.setState({messageMaman : m, disabled: false });
    }
    reponseToto = msg => this.setState({ messageToto: msg });

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Ordre de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Exo6Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
                <Form />

            </div>
        )
    }
}

export default Exo6Maman;