import "./ListaOpciones.css"


const ListaOpciones = (props) => {

    const manejarCambio = (event) => {
        console.log("cambio",event.target.value);
        props.actualizarEquipo(event.target.value);
    }

    return  <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>

            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map( (equipo, idx) => <option key={idx}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones