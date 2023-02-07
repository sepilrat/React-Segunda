import CardWidget from "./CardWidget";
import logo from "./images/mcdonalds-logo-footer-bg-white.png"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <img src={logo} width={109}></img>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="#">Productos</a>
                                    <a className="nav-link" href="/locales">Locales</a>
                                    <a className="nav-link" href="enFamilia">En Familia</a>
                                    <a className="nav-link" href="nosotros">Nosotros</a>

                                </div>
                            </div>
                        </div>
                        <div><CardWidget/></div>
                    </nav>
                </div>
                
            </div>
        </div>
    )

}
export default NavBar;