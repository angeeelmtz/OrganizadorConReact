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
    imagen: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructora en Alura Latam",
    fav: false
  },

  {
    id: uuid(),
    equipo: "Programación",
    imagen: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e instructor",
    fav: false
  },

  {
    id: uuid(),
    equipo: "Front End",
    imagen: "https://github.com/angeeelmtz.png",
    nombre: "Angel Martinez",
    puesto: "FrontEnd Developer",
    fav: true
  },

  {
    id: uuid(),
    equipo: "UX y Diseño",
    imagen: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },

  {
    id: uuid(),
    equipo: "Deveops",
    imagen: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    fav: false
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

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const nuevoColaborador = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevoColaborador);
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

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const meGusta = (id) => {
    const colaboradorLike = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradorLike)
  }

  return (
    <div className="App">
      <Header />

      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      } 

      <MiOrg  cambiarMostrar={cambiarMostrar}/>
      {equipos.map( (equipo) =>  <Equipo 
        key={equipo.titulo} 
        datos={equipo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        meGusta={meGusta}
        />
        )
      }

      <Footer></Footer>
    </div>
  );
}

export default App;
