function Wrapper({ children }){
    // console.log(children)
    // children ='bonjour'
    return (
        <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
            { children }
            {/* ici children est un mot clé, on y échappe pas */}
        </div>
    )
}

export default Wrapper