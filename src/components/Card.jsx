import Card from 'react-bootstrap/Card';

function CardComponent(props) {
    return (
        <>
            <Card style={{ width: "100%", border: "none"}}>
                <Card.Img variant="top" src={props.image} alt={props.title} />
                <Card.Body style={{padding: "20px 22px 40px 22px"}}>
                    <Card.Text style={{
                            color: "hsl(233, 8%, 62%)", 
                            margin: "0"
                        }}>
                        By {props.author}
                    </Card.Text>
                    <Card.Title style={{
                            maxHeight: "50px", 
                            overflow: "hidden",
                            margin: "10px 0",
                            color: "hsl(233, 26%, 24%)"
                        }}>
                        {props.title}
                    </Card.Title>
                    <Card.Text style={{
                            color: "hsl(233, 8%, 62%)",
                            maxHeight: "100px",
                            overflow: "hidden"
                        }}>
                        {props.about}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent