import React from 'react';

const Cars = ({children, color}) => {
    // console.log(props) 
    const colorInfo = color?<p>Couleur: {color}</p>:<p>Couleur: Non précisée</p>
    // const brandInfo = children?<p>Marque: {children}</p>:<p> Marque non précisée</p>

    return children ? (
        <div style={{backgroundColor:'green', width:'400px', padding:'10px', margin:'5px auto'}}>
            <p>Marque: {children}</p>
            <p>{colorInfo}</p>
        </div>
    ) : <p>Pas de data</p>
}

export default Cars
