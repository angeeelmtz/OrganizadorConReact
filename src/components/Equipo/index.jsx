import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) =>{

    const {colorPrimario, titulo, id} = props.datos
    const colorFondo = { backgroundColor: hexToRgba(colorPrimario, 0.4)}
    const bordeTitulo = { borderColor: colorPrimario}
    const {eliminarColaborador, colaboradores, actualizarColor, meGusta} = props

    return <>
        { colaboradores.length > 0 && 
            <section className="equipo" style={colorFondo}>
                <input 
                    type="color" 
                    className="input-Color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <h2 style={bordeTitulo}>{titulo}</h2>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, idx) => <Colaborador 
                            datos={colaborador} 
                            key={idx}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            meGusta={meGusta}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo