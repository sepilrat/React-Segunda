
const NavBar = () => {
  return (

    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4"><img src="./images/mcdonalds-logo-footer-bg-white.png" width={108}></img>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
              <a className="text-decoration-none text-body">Trabaja con Nosotros</a>
              <a className="text-decoration-none text-body">Contacto </a>


              </div>
            </div>
            <div className="Row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>

                      </ul>

                    </div>
                  </div>
                </nav>
              </div>
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default NavBar;