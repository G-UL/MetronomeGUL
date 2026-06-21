// Projects
import "./ClassicMetronome.css";
import type {MetronomeState} from "../../types";


type ClassicMetronomeProps = {metronome: MetronomeState};


function
ClassicMetronome({metronome}: ClassicMetronomeProps)
{
	return (
		<section className="classic-metronome">
			<div className="container">
				<div className="classic-metronome__panel card">
					<h2 className="classic-metronome__number">
						{metronome.bpm}
					</h2>

					<h4 className="classic-metronome__reference">bpm</h4>

					<div className="classic-metronome__control-row">
						<button className="classic-metronome__round-button"
								disabled={metronome.isPlaying}
								onClick={metronome.decreaseBpm}>
							<i className="bi
										  bi-dash-lg">
							</i>
						</button>

						<input disabled={metronome.isPlaying}
							   max="300"
							   min="20"
							   onChange={
								   (event) => metronome.setBpmValue(
									   Number(event.target.value)
								   )
							   }
							   type="range"
							   value={metronome.bpm} />

						<button className="classic-metronome__round-button"
								disabled={metronome.isPlaying}
								onClick={metronome.increaseBpm}>
							<i className="bi
										  bi-plus-lg">
							</i>
						</button>
					</div>

					<div className="classic-metronome__play-row">
						<button className="classic-metronome__play-button"
								onClick={metronome.togglePlaying}>
							<i className={
								metronome.isPlaying ?
									"bi bi-pause-fill" :
									"bi bi-play-fill"
							}>
							</i>
						</button>

						<div className="classic-metronome__stopwatch">
							{metronome.stopwatchDisplay}
						</div>
					</div>

					<div className="row
									classic-metronome__settings">
						<div className="col-md-6">
							<h2 className="classic-metronome__number">
								{metronome.timeSignature}
							</h2>

							<h4 className="classic-metronome__reference">
								time signature
							</h4>

							<div className="classic-metronome__mini-control-row">
								<button className="classic-metronome__round-button"
										disabled={metronome.isPlaying}
										onClick={metronome.previousTimeSignature}>
									<i className="bi
												  bi-dash-lg">
									</i>
								</button>

								<button className="classic-metronome__round-button"
										disabled={metronome.isPlaying}
										onClick={metronome.nextTimeSignature}>
									<i className="bi
												  bi-plus-lg">
									</i>
								</button>
							</div>
						</div>

						<div className="col-md-6">
							<h2 className="classic-metronome__value-text">
								{metronome.subdivision}
							</h2>

							<h4 className="classic-metronome__reference">
								subdivision
							</h4>

							<div className="classic-metronome__mini-control-row">
								<button className="classic-metronome__round-button"
										disabled={metronome.isPlaying}
										onClick={metronome.previousSubdivision}>
									<i className="bi
												  bi-dash-lg">
									</i>
								</button>

								<button className="classic-metronome__round-button"
										disabled={metronome.isPlaying}
										onClick={metronome.nextSubdivision}>
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
