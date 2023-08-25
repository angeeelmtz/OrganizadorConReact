import "./Boton.css"

const Boton = (props) => {
    const valueBtn = props.texto
    return <button className="boton">{valueBtn}</button>
}

export default Boton