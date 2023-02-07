import logoRojo from "./images/mcdonalds-logo-bg-red.png"
const PromoApp = () => {
    return (
        <div className="container-fluid classname= bg-warning my=3">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={logoRojo} width={70}></img>
                            </div>
                            <div className="col-md-10">
                                <h1>Descárgate nuestra app</h1>
                                <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex align-items-center text-end" >
                        <button type="button" class="btn btn-light text-end">Descargar Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoApp;