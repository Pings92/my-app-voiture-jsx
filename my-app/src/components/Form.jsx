import Cars from './Cars';
import React, { Component } from 'react';

class Form extends Component {
    state = {
        username:'',
        color: '',
        colors: ["", "white",   "gainsboro",    "silver",   "darkgray",
                "gray", "dimgray",  "black",    "whitesmoke",   "lightgray",
                "lightcoral",   "rosybrown",    "indianred",    "red",	"maroon",
                "snow", "mistyrose",    "salmon",   "orangered",    "chocolate",
                "brown",    "darkred",  "seashell", "peachpuff",    "tomato",
                "darkorange",   "peru", "firebrick",    "olive",    "linen",
                "bisque",   "darksalmon",   "orange",   "goldenrod",    "sienna",
                "darkolivegreen","oldlace", "antiquewhite", "coral",    "gold",
                "limegreen",    "saddlebrown",  "darkgree", "floralwhite",  "navajowhite",
                "lightsalmon",  "darkkhaki",    "lime", "darkgoldenrod",    "green",
                "cornsilk", "blanchedalmond",   "sandybrown",   "yellow",   "mediumseagreen",
                "olivedrab",    "forestgreen",  "ivory",    "papayawhip",   "burlywood",
                "yellowgreen",  "springgreen",  "seagreen", "darkslategray",]
        
    }
    handlePseudo = (e) => {
        this.setState({username: e.target.value})
    }
    handleColor =(e) => {
        this.setState({color:e.target.value})
    }
    render() {
        return(
            <div>
                <Cars/>
                <hr />
                <h1>Commentaire</h1>
                Formulaire
                <form action="">
                    <div>
                        <label> Pseudo </label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                </form>

                <p> {this.state.username} </p>

                <hr />

                <div>
                    <label>Couleur</label>
                    <select value={this.state.color} onChange={this.handleColor}>
                        {this.state.colors.map((color, index) => (
                            <option key={index} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                    <p style={{ color: this.state.color }}> La couleur choisie est : {this.state.color} </p>
                </div>
            </div>
        )
    }
}

export default Form;