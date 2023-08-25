import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) =>{

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const colorFondo = { backgroundColor: colorSecundario}
    const bordeTitulo = { borderColor: colorPrimario}
    const {eliminarColaborador} = props
    const {colaboradores} = props

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
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo