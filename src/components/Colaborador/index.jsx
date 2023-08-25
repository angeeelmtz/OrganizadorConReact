import "./Colaborador.css"

const Colaborador = (props) => {

    const {imagen, nombre, puesto} = props.datos
    const {colorPrimario} = props

    return(
        <div className="colaborador">
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={imagen} alt={nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Colaborador