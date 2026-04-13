import React, {Component} from 'react';
import Toto from './Toto';
import Compteur from './Compteur';

class Maman extends Component {
    ordreMaman = () => {
        this.setState({
            messageMaman: "Maman m'a dit de faire mes devoirs",
        })   
    }
    responseToto = () => {
        this.setState({
            messageToto: "Toto dit NON!",
        })
    }
    state = {
        // messageMaman: "Oh non, je n'ai pas envie de faire mes devoirs",
        messageMaman: null,
        messageToto: null,
    }
    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la mère</button>
                <p>{this.state.messageMaman}</p>
                {/* <button onClick={this.responseToto}>Ordre de Toto</button>
                <p>{this.state.messageToto}</p> */}
                <hr />
                <Toto name="Toto" responseToto2={this.responseToto} leState={this.state}/>
                <hr />
                <Compteur />

            </div>
            
        )
    }
}
export default Maman;