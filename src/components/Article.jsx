import "../styles/article.css"
import currency from "../assets/images/image-currency.jpg"
import restaurant from "../assets/images/image-restaurant.jpg"
import plane from "../assets/images/image-plane.jpg"
import confetti from "../assets/images/image-confetti.jpg"
import CardComponent from "./Card"

function Article() {

    const articles = [
        {
            author: "Claire Robinson",
            title: "Recieve money in any currency with no fees",
            about: "This world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a singe ...",
            image: currency,
        },{
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            about: "Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you",
            image: restaurant,
        },{
            author: "Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            about: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you",
            image: plane,
        },{
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            about: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site",
            image: confetti,
        }
    ]

    return (
        <>
            <div className="article">
                <div className="headline">Latest Articles</div>
                <div className="article-container">
                    {
                        articles.map((article, index) => (
                            <CardComponent
                                key={index}
                                author={article.author}
                                title={article.title}
                                about={article.about}
                                image={article.image}
                            />       
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Article