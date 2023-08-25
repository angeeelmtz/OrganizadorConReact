import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - Hooks
    //Primer hook: useState()

    // console.log(useState);
    // console.log(useState());

    //Uso de useState: const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [nombre, nombreActualizado] = useState("Angel")

    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     // console.log("Mostrar/Ocultar elemento", !mostrar);
    //     console.log(1);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <span></span>
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="button Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg