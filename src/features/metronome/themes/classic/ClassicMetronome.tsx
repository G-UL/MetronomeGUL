// React
import {useState} from "react";

// Projects
import "./ClassicMetronome.css";
import {SUBDIVISIONS,
		TIME_SIGNATURES} from "../../constants";
import useMetronomeAudio from "../../hooks/useMetronomeAudio";
import useStopwatch from "../../hooks/useStopwatch";
import useWakeLock from "../../../../hooks/useWakeLock";


function
ClassicMetronome()
{
	const [bpm, setBpm] = useState(60);
	const [isPlaying, setIsPlaying] = useState(false);
	const [subdivisionIndex, setSubdivisionIndex] = useState(0);
	const [timeSignatureIndex, setTimeSignatureIndex] = useState(3);
	const timeSignature = TIME_SIGNATURES[timeSignatureIndex];
	const subdivision = SUBDIVISIONS[subdivisionIndex];


	const {resetStopwatch,
		   stopwatchDisplay} = useStopwatch(isPlaying,
											() => setIsPlaying(false));


	useWakeLock(isPlaying);
	useMetronomeAudio({bpm,
					   isPlaying,
					   subdivisionIndex,
					   timeSignature});


	return (
		<section className="classic-metronome">
			<div className="container">
				<div className="classic-metronome__panel card">
					<h2 className="classic-metronome__number">{bpm}</h2>

					<h4 className="classic-metronome__reference">bpm</h4>

					<div className="classic-metronome__control-row">
						<button className="classic-metronome__round-button"
								disabled={isPlaying}
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

						<input disabled={isPlaying}
							   max="300"
							   min="20"
							   onChange={(event) => setBpm(Number(event.target.value))}
							   type="range"
							   value={bpm} />

						<button className="classic-metronome__round-button"
								disabled={isPlaying}
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
										disabled={isPlaying}
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
										disabled={isPlaying}
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
										disabled={isPlaying}
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
										disabled={isPlaying}
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
