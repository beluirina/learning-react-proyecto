import { Link } from "react-router-dom"
import ItemCount from "./ItemCount";

//proviene de una Promise - que los resuelva en tiempo diferito SETTIMEOUT de 2 segundos para emular retrasos de red

function Item( { prod, loading } ) {
    return (
        <div> 
            { ( loading )  ? ( <h2>Loading... </h2> ) : ( 
                    <div className="card" key={ prod.id } style={{ width: "18rem"  }}>
                    <img className="card-img-top" src={ prod.img } /> 
                    <div className="card-body">
                        <h5 className="card-title">{ prod.title }</h5>
                        <p className="card-text">{ prod.category }</p>
                        

                        <Link to={`/details/${prod.id}`} className="btn btn-primary">
                            Detalles
                        </Link>
                    </div>
                </div>
                
            )}
        </div>
    )
}


export default Item