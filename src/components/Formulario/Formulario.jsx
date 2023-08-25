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

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

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

    const manejarEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form className="form" onSubmit={manejarEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <CampotTexto 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo}
                actualizarValor={setTitulo}
            />
            <CampotTexto 
                titulo="Color" 
                placeholder="Ingresar color en Hex"
                required 
                valor={color}
                actualizarValor={setColor}
            />
            <Boton texto="Nuevo equipo"/>
        </form>
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