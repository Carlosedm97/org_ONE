import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../BotonCrear/BotonCrear"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        props.crearEquipo({ titulo: titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellene el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese el puesto" 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingrese el enlace de la foto" 
                required 
                valor={foto}
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton texto="Crear colaborador" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellene el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
                />
            <Campo 
                titulo="Color" 
                placeholder="Ingrese el color en HEX" 
                required 
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton texto="Crear equipo" />
        </form>
    </section>
}

export default Formulario