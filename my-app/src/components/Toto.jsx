import React, {Component} from 'react';

const Toto = props => {
    const btnResponseToto = props.leState.messageMaman !== null ? (<button onClick={props.responseToto2}> Réponse </button>):
    (<button disabled>Réponse</button>)

        return (
            <div>
                <h2>{props.name}</h2>
                {btnResponseToto}
                <p>{props.leState.messageToto}</p>
            </div>
        )
}
export default Toto;