import "./CampoTexto.css"

const CampotTexto = (props) => {
    const datos = `${props.placeholder}...`

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={datos} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampotTexto