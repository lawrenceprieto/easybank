import "../styles/herobanner.css"
import herobanner from "../assets/images/image-mockups.png"
import bgMobile from "../assets/images/bg-intro-mobile.svg"

function Herobanner() {
    return (
        <>
            <div className="herobanner">
                <img src={bgMobile} className="bg-mobile" alt="bg-mobile" />
                <div className="hero-img-container">
                    <img className="hero-img" src={herobanner} alt="herobanner" />
                </div>
                <div className="hero-details">
                    <div className="hero-heading">Next generation digital banking</div>
                    <div className="hero-subheading">Take your financial life online. Your Easybank account will be a one-stop-shop for spending,saving,budgeting,investing and much more.</div>
                    <button type="button" className="hero-btn">Request Invite</button>
                </div>
            </div>
        </>
    )
}

export default Herobanner