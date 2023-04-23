import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "DevOps",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable="true" defaultValue="" hidden >Seleccionar equipo...</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones