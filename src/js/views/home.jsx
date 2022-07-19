import React from "react";

//import your components
import Menu from "../component/menu.jsx"
import Jumbotron from "../component/jumbotron.jsx"
// import Card from "../component/card.jsx"
import CardGroup from "../component/cardGroup.jsx"
import Footer from "../component/footer.jsx"

//variables for adding to components
let jumboDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores. Reiciendis doloremque blanditiis dolores molestiae minima!"

let cardProps1 = 
	{title: "Card Title", 
	image: "https://picsum.photos/seed/325/500",
	description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	};

let cardProps2 = 
	{title: "Card Title", 
	image: "https://picsum.photos/seed/325/500", 
	description: "This card has supporting text below as a natural lead-in to additional content."};

let cardProps3 = 
	{title: "Card Title", 
	image: "https://picsum.photos/seed/325/500",
	description: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."};

let cardProps = [cardProps1, cardProps2, cardProps3]

const Home = () => {
	return (
	<>
	<div className="container-fluid row" style={{paddingRight: "0px"}}>
		<Menu/>
		<Jumbotron title="A Warm Welcome!" description={jumboDescription}/>
		<CardGroup cardData={cardProps} />
		
		{/* <Card title={cardProps1.title} image={cardProps1.image} description={cardProps1.description} />
		<Card title={cardProps2.title} image={cardProps2.image} description={cardProps2.description} />
		<Card title={cardProps3.title} image={cardProps3.image} description={cardProps3.description} /> */}
	</div>
	<Footer/>
	</>
	);
};

export default Home;
