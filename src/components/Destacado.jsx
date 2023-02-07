import imagenDestacada from "./images/1440x650_8da543d1c0.png"

const Destacado =() =>
{
    return(
        <div className="container-fluid bg-warning">
            <div className="row">
                <div className="col">
                    <img src={imagenDestacada} alt={"Promo 1"} width="100%"></img>
                </div>
            </div>

        </div>
    );
}
export default Destacado;