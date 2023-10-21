import Article from "../components/Article"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Herobanner from "../components/Herobanner"
import NavBar from "../components/NavBar"

function LandingPage() {
    return (
        <>
            <NavBar />
            <Herobanner />
            <Feature />
            <Article />
            <Footer />
        </>
    )
}

export default LandingPage