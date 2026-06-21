// Projects
import "./ClassicMetronome.css";


function
ClassicMetronome()
{
	return (
		<section className="classic-metronome">
			<div className="container">
				<div className="classic-metronome__panel card">
					<div className="row">
						<div className="col-md-12">
							<h2 className="classic-metronome__number">60</h2>
							<h4 className="classic-metronome__reference">bpm</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ClassicMetronome;