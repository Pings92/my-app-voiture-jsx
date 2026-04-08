import './App.css';
import { Component } from 'react';
import Mycars from './components/Mycars'

class App extends Component {
    changeViaInput =(e) => {
      this.setState ({
        titre: e.target.value
      })
    }
    changeViaBind =(param) => {
      this.setState({
        titre:param
      })
    }
    changeViaParam =(newTitre) => {
      this.setState ({
        titre: newTitre
      })
    }
    changeName = () => {
      this.setState({
        titre:'Hello'
      });
    }

  state = {
    titre: 'Mon catalogue de voitures',
    color: '#c2343467',
  }
  render(){
    
    return (
      <div className="App">

        <Mycars
          tititre={this.state.titre}
          cocolor={this.state.color}
        /> 
        {/* Ici on passe les element du state en props pour l'enfant "Mycars" */}
        {/* Si on souhaite utilisé un props dans un fichier enfant il faut le décalré  */}
        {/* Props donné recu d'un parent / State donnée consomable dans son propre composant */}
        <p>mon children</p> 
        {/* le children c'est l'intérieur entre deux balises */}
        <button onClick={this.changeName}>Changer le nom en dur</button>
        <button onClick= { () => this.changeViaParam ('Mon nouveau titre')}>Titre,modifié via paramètre</button>
        {/* La "arrow function" fait qu'elle ne s'exécute pas immédiatement, si on la supprimais pour une fct simple le titre serait automatiquement changé au chargement de la page et non à l'appuie sur le btn */}
        <button onClick= {this.changeViaBind.bind(this,'Mon nouveau titre via bind')}>Titre modifié via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    )
  }
}

export default App;
