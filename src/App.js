import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    id: uuid(),
    equipo: "Programación",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    id: uuid(),
    equipo: "Front End",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    id: uuid(),
    equipo: "UX y Diseño",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  }


])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Deveops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]) 

  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador");
  }

  const actualizarColor = (color, id) => {
    const equiposActualizado = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo;
    })

    setEquipos(equiposActualizado);
  }

  return (
    <div className="App">
      <Header />

      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        />
      } 

      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      {equipos.map( (equipo) =>  <Equipo 
        key={equipo.titulo} 
        datos={equipo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />
        )
      }

      <Footer></Footer>
    </div>
  );
}

export default App;
