import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { foto, nombre, puesto, id, fav } = props.datos
    const { eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{backgroundColor: props.colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav === true ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} /> }
        </div>
    </div>
}

export default Colaborador