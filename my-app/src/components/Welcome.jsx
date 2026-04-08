// EXERCICE 5

const Welcome =() => {

    // bonjour()= console.log("bonjour");
    const bonjour = () => {console.log("bonjour")};

    const bonsoir=(arg)=>{
        console.log(arg);
    }
    return (
        <div>
            <button onClick={bonjour}>Invoquer une fonction</button>

            <button onClick={()=>bonsoir("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir"</button>

            <button onClick={()=>console.log('Bonne Nuit')}>Clg sur le bouton</button>
        </div>
    )
}

export default Welcome