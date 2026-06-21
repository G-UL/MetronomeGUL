// React
import {useState} from "react";

// Projects
import ClassicMetronome from "./themes/classic/ClassicMetronome";
import ModernMetronome from "./themes/modern/ModernMetronome";
import "./MetronomePage.css";


function
MetronomePage()
{
	const [theme, setTheme] = useState<"classic" | "modern">("classic");


	return (
		<main className="metronome-page">
			<div className="metronome-page__toolbar">
				<span>Classic</span>

				<button className={`theme-toggle
									${theme === "modern" ?
									"theme-toggle--modern" :
									""}`}
						onClick={
							() => setTheme(
								(current) => current === "classic" ?
											 "modern" :
											 "classic"
							)
						}>
					<span />
				</button>

				<span>Modern</span>
			</div>

			{
				theme === "classic" ?
				<ClassicMetronome /> :
				<ModernMetronome />
			}
		</main>
	);
}


export default MetronomePage;
