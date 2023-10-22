import "../styles/herobanner.css"
import herobanner from "../assets/images/image-mockups.png"
import bgMobile from "../assets/images/bg-intro-mobile.svg"
import bgDesktop from "../assets/images/bg-intro-desktop.svg"

function Herobanner() {
    return (
        <>
            <div className="herobanner">
                <div className="hero-img-container">
                    <img className="bg-mobile" src={bgMobile} alt="bg-mobile" />
                    <img className="bg-desktop" src={bgDesktop} alt="bg-desktop" />
                    <img className="hero-img" src={herobanner} alt="herobanner" />
                </div>
                <div className="hero-details">
                    <div className="hero-heading">Next generation digital banking</div>
                    <div className="hero-subheading">Take your financial life online. Your Easybank account will be a one-stop-shop for spending,saving,budgeting,investing and much more.</div>
                    <button className="hero-btn" type="button">Request Invite</button>
                </div>
            </div>
        </>
    )
}

export default Herobanner