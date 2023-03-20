import { useParams } from "react-router-dom";


const ThankYou = () => {

    const {orderId}= useParams();

    return(
        <div className="container-fluid my-5">
                   <div className="row">
                <div className="col-md-12">
                    {orderId ? <div className="alert alert-warning bg-warning" role="alert"><h3>Gracias por tu compra</h3>
                        Se generó una nueva compra con el número de orden {orderId}  </div> : ""
                    }
                    
                </div>
            </div>
        </div>

    );
}

export default ThankYou;