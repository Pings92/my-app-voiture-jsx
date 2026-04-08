import React from 'react';
import Wrapper from './Wrapper';

const Cars = ({children, color}) => {
    // console.log(props) 
    const colorInfo = color?<p>Couleur: {color}</p>:<p>Couleur: Non précisée</p>
    // const brandInfo = children?<p>Marque: {children}</p>:<p> Marque non précisée</p>

    return children ? (
    // return children && (
        <div>
        {/* <div style={{backgroundColor:'green', width:'400px', padding:'10px', margin:'5px auto'}}> */}
        {/* Au lieu d'utiliser la div avec un style on va faire appel au Wrapper qu'on a crée dans component/Wrraper.jsx */}
        <Wrapper>
            <p>Marque: {children}</p>
            <p>{colorInfo}</p>
            {/* version courte {color ? <p>Couleur: {color}</p>:<p>Couleur: Néant</p>}*/}
        </Wrapper>

        </div>
    ) : <p style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>Pas de data</p>
    // )
}

export default Cars
