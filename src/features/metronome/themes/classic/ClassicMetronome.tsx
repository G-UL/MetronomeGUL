// Projects
import "./ClassicMetronome.css";


function
ClassicMetronome()
{
	return (
		<section className="classic-metronome">
			<div className="container">
				<div className="classic-metronome__panel card">
					<h2 className="classic-metronome__number">60</h2>

					<h4 className="classic-metronome__reference">bpm</h4>

					<div className="classic-metronome__control-row">
						<button className="classic-metronome__round-button">
							<i className="bi
										  bi-dash">
							</i>
						</button>

						<input max="300"
							   min="20"
							   readOnly
							   type="range"
							   value="60" />

						<button className="classic-metronome__round-button">
							<i className="bi
										  bi-plus">
							</i>
						</button>
					</div>

					<button className="classic-metronome__play-button">
						<i className="bi
									  bi-play-fill">
						</i>
					</button>

					<div className="classic-metronome__stopwatch">00:00</div>

					<div className="row
									classic-metronome__settings">
						<div className="col-md-6">
							<h2 className="classic-metronome__number">4/4</h2>

							<h4 className="classic-metronome__reference">time signature</h4>
						</div>

						<div className="col-md-6">
							<h2 className="classic-metronome__number">Quarter</h2>

							<h4 className="classic-metronome__reference">subdivision</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default ClassicMetronome;
