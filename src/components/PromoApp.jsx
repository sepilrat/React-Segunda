import logoRojo from "./images/mcdonalds-logo-bg-red.png"
const PromoApp = () => {
    return (
        <div className="container-fluid classname= bg-warning mt-5 ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-2 d-flex align-items-center">
                                <img  src={logoRojo} width={70} alt="Logo"></img>
                            </div>
                            <div className="col-md-10">
                                <h1>Descárgate nuestra app.</h1>
                                <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 d-flex align-items-center" >
                        <button type="button" className="btn btn-light">Descargar Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoApp;