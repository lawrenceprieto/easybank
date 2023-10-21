import "../styles/navbar.css"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import logo from "../assets/images/logo.svg"
import hamburgerButton from "../assets/images/icon-hamburger.svg"
import closeButton from "../assets/images/icon-close.svg"

function NavBar() {

    const [ hide, setHide ] = useState(true);
    const [show, setShow] = useState(false);

    function handleHamburgerButton() { setHide(false); setShow(true); }
    function handleCloseButton() { setHide(true); setShow(false); }

    return (
        <>
            <header>
                <div className="navbar">
                    <img src={logo} alt="logo" />
                    <div className="navbar-mobile-menu">
                        <img src={hamburgerButton} alt="hamburger-button" 
                            className={ hide ? null : "d-none" }
                            onClick={handleHamburgerButton}
                        />
                        <img src={closeButton} alt="close-button"
                            className={ hide ? "d-none" : null } 
                            onClick={handleCloseButton} 
                        />
                    </div>
                    <div className="navbar-desktop-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <button className="navbar-btn navbar-desktop-menu">Request Invite</button>
                </div>
                <Modal show={show} onHide={handleCloseButton}>
                    <Modal.Body>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </Modal.Body>
                </Modal>
            </header>
        </>
    )
}

export default NavBar