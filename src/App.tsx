// React
import {useState} from "react";

// Projects
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MetronomePage from "./features/metronome/MetronomePage";


function
App()
{
	return (
		<>
			<Header />

			<MetronomePage />

			<Footer />
		</>
	)
}


export default App;
