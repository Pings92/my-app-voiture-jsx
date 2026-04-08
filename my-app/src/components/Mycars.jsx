import { Component } from 'react';
import Cars from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

// const Cars = ({children, color}) => {
//     const colorInfo = color ? color : "Néant";

//     return children && (
//         <Wrapper>
//             <p>Marque: {children}</p>
//             <p>{colorInfo}</p>
//         </Wrapper>
//     )
// }


export class Mycars extends Component {
  state={
    cars:['Toyota', 'Renault', 'Peugeot', 'Citroën'],
  }

  noCopy = () => {
    alert('merci de ne pas copier ce texte');
    }

  addStyle = (e) => {
    console.log(e.target);

    if(e.target.classList.contains('styled')) {
      e.target.classList.remove('styled');
    } else {
      e.target.classList.add('styled');
    }
  } 

  render() {
    console.log(this);
    return (
      <div >
        <Wrapper> {/*renvoie le style qu'on a précisé dans notre fichier wrapper.jsx */}
          {/* <h1 style={{color: this.props.cocolor}} > {this.props.tititre}</h1> */}
          <MyHeader myStyle={this.props.cocolor}>
            {/* <h1 style={{color: this.props.cocolor}}> {this.props.tititre}</h1> */}
            {this.props.tititre}
          </MyHeader>
          <p onCopy={this.noCopy}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id alias ducimus, laudantium eligendi voluptatum esse asperiores debitis doloremque incidunt tempore culpa delectus officiis ad quasi itaque iste impedit harum quae.</p>
          {/* <h1 onMouseOver={this.addStyle}>Mon titre test pour le mouseover</h1>
          <h1 onMouseOver={this.addStyle}>{this.props.tititre}</h1> */}
          <h1>titre qui change</h1>
        </Wrapper>

          {/* <h1>Mon Catalogue de voiture</h1> */}
        <Cars color="red">{this.state.cars[0]}</Cars>
        <Cars color="blue">Renault </Cars>
        {/* Les deux lignes ci dessous sont équivalent la première on passe par le props et la deuxième on écrit en dur la marque de la voiture */}
        <Cars color="green">{this.state.cars[2]} </Cars>
        <Cars>{this.state.cars[3]}</Cars> {/* Dans le rendu on aura "couleur non précisé", car on a mis une condition pour le cas où il n'y pas de couleur*/}
        <Cars></Cars> {/* Dans le rendu on aura "pas de data" car on a mis une contion dans le cas où l'on n'aurait pas de modèle de voiture*/}
        <Cars>{this.state.cars[0]}</Cars>
        <Cars color="yellow"></Cars>
        <MyHeader myStyle={this.props.cocolor}>
            
            bonjour
        </MyHeader>
      </div>
    )
  }
}

export default Mycars;
