const Exo6Toto = props => {
  return (
    <div>
        <h2>{props.name}</h2>
        <button disabled = {props.leState.disabled}
                onClick = {() => props.reponseTotoProps("non")}
            // Compléter cette section
        >Réponse</button>

        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Exo6Toto