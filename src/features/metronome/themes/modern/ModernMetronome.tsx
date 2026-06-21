// Projects
import "./ModernMetronome.css";
import type {MetronomeState} from "../../types";

type ModernMetronomeProps = {metronome: MetronomeState};


function
ModernMetronome({metronome}: ModernMetronomeProps)
{
	return (
		<section className="modern-metronome">
			<div className="container">
				<div className="modern-metronome__panel">
					<div className="modern-metronome__tempo">
						<span>Tempo</span>
						<strong>{metronome.bpm}</strong>
						<span>BPM</span>
					</div>

					<div className="modern-metronome__beats">
						<span className="modern-metronome__beat
										 modern-metronome__beat--active">
						</span>
						<span className="modern-metronome__beat"></span>
						<span className="modern-metronome__beat"></span>
						<span className="modern-metronome__beat"></span>
					</div>

					<button className="modern-metronome__play"
							onClick={metronome.togglePlaying}>
						<i className={metronome.isPlaying ?
									  "bi bi-pause-fill" :
									  "bi bi-play-fill"}>
						</i>
					</button>

					<div className="modern-metronome__timer">
						{metronome.stopwatchDisplay}
					</div>

					<div className="modern-metronome__bpm-control">
						<button disabled={metronome.isPlaying}
								onClick={metronome.decreaseBpm}>
							-
						</button>

						<input disabled={metronome.isPlaying}
							   max="300"
							   min="20"
							   onChange={(event) => metronome.setBpmValue(Number(event.target.value))}
							   type="range"
							   value={metronome.bpm} />

						<button disabled={metronome.isPlaying}
								onClick={metronome.increaseBpm}>
							+
						</button>
					</div>

					<div className="modern-metronome__settings">
						<div className="modern-metronome__setting-control">
							<span>Signature</span>

							<button disabled={metronome.isPlaying}
									onClick={metronome.previousTimeSignature}>
								<i className="bi
											  bi-dash-lg">
								</i>
							</button>

							<strong>{metronome.timeSignature}</strong>

							<button disabled={metronome.isPlaying}
									onClick={metronome.nextTimeSignature}>
								<i className="bi
											  bi-plus-lg">
								</i>
							</button>
						</div>

						<div className="modern-metronome__setting-control">
							<span>Subdivision</span>

							<button disabled={metronome.isPlaying}
									onClick={metronome.previousSubdivision}>
								<i className="bi
											  bi-dash-lg">
								</i>
							</button>

							<strong>{metronome.subdivision}</strong>

							<button disabled={metronome.isPlaying}
									onClick={metronome.nextSubdivision}>
								<i className="bi
											  bi-plus-lg">
								</i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default ModernMetronome;
