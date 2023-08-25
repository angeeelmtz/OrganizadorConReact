import { useState } from "react"

import "./Formulario.css"
import CampotTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const {registrarColaborador} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            imagen,
            equipo  
        }
        registrarColaborador(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampotTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <CampotTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto"
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <CampotTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario