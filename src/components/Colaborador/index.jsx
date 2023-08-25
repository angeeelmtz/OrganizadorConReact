import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {

    const {imagen, nombre, puesto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, meGusta} = props

    return(
        <div className="colaborador">
            <AiFillCloseCircle className="iconDelete" onClick={() => eliminarColaborador(id)} />
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={imagen} alt={nombre}/>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart className="heart" color="red" onClick={() => meGusta(id)} /> 
                    : <AiOutlineHeart onClick={() => meGusta(id)} className="heart" />}
            </div>
        </div>
    )
}

export default Colaborador