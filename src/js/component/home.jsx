import React from "react";

//import your components
import Menu from "./menu.jsx"
import Jumbotron from "./jumbotron.jsx"

//create your first component
let jumboDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sed reiciendis totam maiores, neque eligendi earum doloremque natus quos vitae quis accusamus perspiciatis dolores. Reiciendis doloremque blanditiis dolores molestiae minima!"
const Home = () => {
	return (
	<>
		<Menu/>
		<Jumbotron title="A Warm Welcome!" description={jumboDescription}/>
	</>
	);
};

export default Home;
