import Article from "../components/Article"
import Feature from "../components/Feature"
import Herobanner from "../components/Herobanner"
import NavBar from "../components/NavBar"

function LandingPage() {
    return (
        <>
            <NavBar />
            <Herobanner />
            <Feature />
            <Article />
        </>
    )
}

export default LandingPage