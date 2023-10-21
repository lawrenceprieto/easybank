import "../styles/footer.css"

import FooterLogo from "../assets/images/logo-footer.svg"

import facebook from "../assets/images/icon-facebook.svg"
import youtube from "../assets/images/icon-youtube.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="logo-socmed">
                    <img src={FooterLogo} alt="footer-logo" />
                    <div className="footer-socmed">
                        <img src={facebook} alt="facebook" />
                        <img src={youtube} alt="youtube" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />                    
                    </div>
                </div>
                <div className="footer-navs">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="btn-credit">
                    <button className="footer-btn">Request Invite</button>
                    <div className="footer-credit">&copy; Easybank. All Rights Reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer