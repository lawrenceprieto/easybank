import "../styles/features.css"
import online from "../assets/images/icon-online.svg"
import budgeting from "../assets/images/icon-budgeting.svg"
import onboarding from "../assets/images/icon-onboarding.svg"
import api from "../assets/images/icon-api.svg"

function Feature() {
    const features = [
        {
            name: "Online Banking",
            about: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
            image: online
        },{
            name: "Simple Budgeting",
            about: "See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits.",
            image: budgeting
        },{
            name: "Fast Onboarding",
            about: "We don't do branches.Open your account in minues online and start taking control of your finances right away.",
            image: onboarding
        },{
            name: "Open API",
            about: "Manage your savings, invetments, pension, and much more from ane account. Tracking your money has never been easier.",
            image: api
        },
    ];

    return (
        <>
            <div className="feature">
                <div className="headline">
                    <div className="heading">Why choose Easybank?</div>
                    <div className="sub-heading">We leverage Open Banking to turn your bank account into your financial hub.Control your finances like never before.</div>
                </div>
                <div className="feature-list">
                    {
                        features.map((feature, index) => (
                            <div className="feature-container" key={index}>
                                <img src={feature.image} alt={feature.name} />
                                <div className="name">{feature.name}</div>
                                <div className="about">{feature.about}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Feature