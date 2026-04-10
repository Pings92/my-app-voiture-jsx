import React, {Component} from 'react';

const Toto = props => {
    const btnResponseToto = props.leState.messageMaman !== null ? (<button> Réponse </button>):
    (<button disabled>Réponse</button>)

        return (
            <div>
                <h2>{props.name}</h2>
                {btnResponseToto}
            </div>
        )
}
export default Toto;