// React
import {useEffect,
		useState} from "react";

// Projects
import "./ClassicMetronome.css";


const STOPWATCH_LIMIT_SECONDS = 99 * 60 + 59;
const SUBDIVISIONS = ["Quarter",
					  "Eighth",
					  "Triplet",
					  "Sixteenth",
					  "Quintuplet",
					  "Sextuplet",
					  "Septuplet",
					  "Octuplet",
					  "Nonuplet"];
const TIME_SIGNATURES = ["1/4",
						 "2/4",
						 "3/4",
						 "4/4",
						 "5/4",
						 "6/4",
						 "7/4",
						 "3/8",
						 "5/8",
						 "6/8",
						 "7/8",
						 "9/8",
						 "12/8"];

function
ClassicMetronome()
{
	const [bpm, setBpm] = useState(60);
	const [isPlaying, setIsPlaying] = useState(false);
	const [secondsElapsed, setSecondsElapsed] = useState(0);
	const [subdivisionIndex, setSubdivisionIndex] = useState(0);
	const [timeSignatureIndex, setTimeSignatureIndex] = useState(3);
	const timeSignature = TIME_SIGNATURES[timeSignatureIndex];
	const stopwatchMinutes = Math.floor(secondsElapsed / 60);
	const stopwatchSeconds = secondsElapsed % 60;
	const stopwatchDisplay = [String(stopwatchMinutes).padStart(2,
																"0"),
							  String(stopwatchSeconds).padStart(2,
																"0")].join(":");
	const subdivision = SUBDIVISIONS[subdivisionIndex];


	const resetStopwatch = () => {
		setSecondsElapsed(0);
	};


	useEffect(
		() => {
			if (!isPlaying) return ;

			const timerId = window.setInterval(
				() => {
					setSecondsElapsed(
						(current) => {
							if (current >= STOPWATCH_LIMIT_SECONDS)
							{
								setIsPlaying(false);

								return 0;
							}

							return current + 1;
						}
					);
				}, 
				1000
			);

			return () => window.clearInterval(timerId);
		},
		[isPlaying]
	);


	return (
		<section className="classic-metronome">
			<div className="container">
				<div className="classic-metronome__panel card">
					<h2 className="classic-metronome__number">{bpm}</h2>

					<h4 className="classic-metronome__reference">bpm</h4>

					<div className="classic-metronome__control-row">
						<button className="classic-metronome__round-button"
								onClick={
									() => {
										setBpm((current) => Math.max(20, current - 1));
										resetStopwatch();
									}
								}>
							<i className="bi
										  bi-dash-lg">
							</i>
						</button>

						<input max="300"
							   min="20"
							   onChange={(event) => setBpm(Number(event.target.value))}
							   type="range"
							   value={bpm} />

						<button className="classic-metronome__round-button"
								onClick={
									() => {
										setBpm((current) => Math.min(300, current + 1));
										resetStopwatch();
									}
								}>
							<i className="bi
										  bi-plus-lg">
							</i>
						</button>
					</div>

					<div className="classic-metronome__play-row">
						<button className="classic-metronome__play-button"
								onClick={() => setIsPlaying((current) => !current)}>
							<i className={isPlaying ?
										  "bi bi-pause-fill" :
										  "bi bi-play-fill"}>
							</i>
						</button>

						<div className="classic-metronome__stopwatch">{stopwatchDisplay}</div>
					</div>

					<div className="row
									classic-metronome__settings">
						<div className="col-md-6">
							<h2 className="classic-metronome__number">
								{timeSignature}
							</h2>

							<h4 className="classic-metronome__reference">
								time signature
							</h4>

							<div className="classic-metronome__mini-control-row">
								<button className="classic-metronome__round-button"
										onClick={
											() => {
												setTimeSignatureIndex(
													(current) => current === 0 ?
																 TIME_SIGNATURES.length - 1 :
																 current - 1
												);
												resetStopwatch();
											}
										}>
									<i className="bi
												  bi-dash-lg">
									</i>
								</button>

								<button className="classic-metronome__round-button"
										onClick={
											() => {
												setTimeSignatureIndex(
													(current) => current === TIME_SIGNATURES.length - 1 ?
																 0 :
																 current + 1
												);
												resetStopwatch();
											}
										}>
									<i className="bi
												  bi-plus-lg">
									</i>
								</button>
							</div>
						</div>

						<div className="col-md-6">
							<h2 className="classic-metronome__value-text">
								{subdivision}
							</h2>

							<h4 className="classic-metronome__reference">
								subdivision
							</h4>

							<div className="classic-metronome__mini-control-row">
								<button className="classic-metronome__round-button"
										onClick={
											() => {
												setSubdivisionIndex(
													(current) => current === 0 ?
																 SUBDIVISIONS.length - 1 :
																 current - 1
												);
												resetStopwatch();
											}
										}>
									<i className="bi
												  bi-dash-lg">
									</i>
								</button>

								<button className="classic-metronome__round-button"
										onClick={
											() => {
												setSubdivisionIndex(
													(current) => current === SUBDIVISIONS.length - 1 ?
																 0 :
																 current + 1
												);
												resetStopwatch();
											}
										}>
									<i className="bi
												  bi-plus-lg">
									</i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default ClassicMetronome;
