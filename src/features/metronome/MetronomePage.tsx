// React
import {useState} from "react";

// Projects
import ClassicMetronome from "./themes/classic/ClassicMetronome";
import ModernMetronome from "./themes/modern/ModernMetronome";
import useMetronomeState from "./hooks/useMetronomeState";
import "./MetronomePage.css";


function
MetronomePage()
{
	const [theme, setTheme] = useState<"classic" | "modern">("classic");
	const metronome = useMetronomeState();


	return (
		<main className="metronome-page">
			<div className="metronome-page__toolbar">
				<span>Classic</span>

				<button className={`theme-toggle
									${theme === "modern" ?
									"theme-toggle--modern" :
									""}`}
						disabled={metronome.isPlaying}
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
				<ClassicMetronome metronome={metronome} /> :
				<ModernMetronome metronome={metronome} />
			}
		</main>
	);
}


export default MetronomePage;
