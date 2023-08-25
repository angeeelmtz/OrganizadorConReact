import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) =>{
    //Destructuracion
    /*
    const titulo = props.datos.titulo
    const colorPrimario = props.datos.colorPrimario
    const colorSecundario = props.datos.colorSecundario
    */
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const colorFondo = { backgroundColor: colorSecundario}
    const bordeTitulo = { borderColor: colorPrimario}

    const {colaboradores} = props

    /* 
        style={ { backgroundColor: props.datos.color } }
        style= {colorSecundario}
    
    */

    return <>
        { colaboradores.length > 0 && 
            <section className="equipo" style={colorFondo}>
                <h2 style={bordeTitulo}>{titulo}</h2>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, idx) => <Colaborador 
                            datos={colaborador} 
                            key={idx}
                            colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo