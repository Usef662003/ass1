import "../navbar/navbar.css"
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 end-0 z-3 ">
                <div className=" container position-relative">
                    <a className="navbar-brand " href="#home">START FRAMEWORK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-absolute end-0" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#protfolio">PROTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#container">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
