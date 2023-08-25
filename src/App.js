import { useState } from 'react';

import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Programación",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    equipo: "Programación",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    equipo: "Front End",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
    equipo: "UX y Diseño",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer"
  },

  {
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
    console.log("Nuevo colaborador: ",colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Deveops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador");
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
        />
        )
      }

      <Footer></Footer>
    </div>
  );
}

export default App;
