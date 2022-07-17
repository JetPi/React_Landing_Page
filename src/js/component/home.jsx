import React from "react";

//import your components
import Menu from "./menu.jsx"
import Jumbotron from "./jumbotron.jsx"
import CardGroup from "./card.jsx"

//variables for adding to components
let jumboDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores. Reiciendis doloremque blanditiis dolores molestiae minima!"

let cardProps = {
	titles: ["Card Title", "Card Title", "Card Title"],
	images: ["https://picsum.photos/seed/325/500","https://picsum.photos/seed/325/500", "https://picsum.photos/seed/325/500"],
	descriptions: [
		"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		"This card has supporting text below as a natural lead-in to additional content.",
		"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
	]
}

const Home = () => {
	return (
	<>
		<Menu/>
		<Jumbotron title="A Warm Welcome!" description={jumboDescription}/>
		<CardGroup 
			titles={cardProps.titles}
			images={cardProps.images}
			descriptions={cardProps.descriptions} 
		/>
	</>
	);
};

export default Home;
