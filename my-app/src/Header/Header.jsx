import { NavLink } from "react-router-dom";

const Header = ({showModal}) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
              <NavLink className="nav-link" to='pokemon'>Pokemons</NavLink>
              <NavLink className="nav-link" to='todo'>Todo</NavLink>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={showModal}>
            Launch modal
          </button>
        </div>
      </nav>
    );
  }
  

export default Header