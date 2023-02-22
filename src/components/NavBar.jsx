import CardWidget from "./CardWidget";
import logo from "./images/mcdonalds-logo-footer-bg-white.png"
import { Link, NavLink } from "react-router-dom";

//para enlaces internos no se usan los <a> sino los <Link>

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"./"}> <img src={logo} width={109} alt="Logo"/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {/* <NavLink className="nav-link" aria-current="page" to={"/"}>Productos</NavLink> */}
                                    <NavLink className="nav-link" activeclassname={"active"} to="/category/hamburguesas">Hamburguesas</NavLink>
                                    <NavLink className="nav-link" activeclassname ={"active"} to={"/category/papas"}>Papas</NavLink>
                                    <NavLink className="nav-link" activeclassname = {"active"} to={"/category/postres"}>Postres</NavLink>
                                </div>
                            </div>
                             <div className=""><CardWidget /></div>
                        </div>
                        
                    </nav>
                    
                </div>

            </div>
        </div>
    )

}
export default NavBar;