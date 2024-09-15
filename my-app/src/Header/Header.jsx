const Header = ({showModal}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md">
                <a className="navbar-brand" href="">Navbar</a>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={showModal}>
                Launch modal
            </button>
            </div>
        </nav>
    )
}

export default Header