import React, {Component} from 'react';
import Toto from './Toto';

class Maman extends Component {
    ordreMaman = () => {
        this.setState({
            messageMaman: "Maman m'a dit de faire mes devoirs",
        })   
    }
    ordreToto = () => {
        this.setState({
            messageToto: "Toto a dit de faire les devoirs",
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
                {/* <button onClick={this.ordreToto}>Ordre de Toto</button>
                <p>{this.state.messageToto}</p> */}
                <hr />
                <Toto name="Toto" leState={this.state}/>
            </div>
        )
    }
}
export default Maman;