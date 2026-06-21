import "./ModernMetronome.css";

function ModernMetronome() {
  return (
    <section className="modern-metronome">
      <div className="container">
        <div className="modern-metronome__panel">
          <div className="modern-metronome__tempo">
            <span>Tempo</span>
            <strong>60</strong>
            <span>BPM</span>
          </div>

          <div className="modern-metronome__beats">
            <span className="modern-metronome__beat modern-metronome__beat--active"></span>
            <span className="modern-metronome__beat"></span>
            <span className="modern-metronome__beat"></span>
            <span className="modern-metronome__beat"></span>
          </div>

          <button className="modern-metronome__play">
            <i className="bi bi-play-fill"></i>
          </button>

          <div className="modern-metronome__timer">00:00</div>

          <div className="modern-metronome__bpm-control">
            <button>-</button>
            <input max="300" min="20" readOnly type="range" value="60" />
            <button>+</button>
          </div>

          <div className="modern-metronome__settings">
            <div>
              <span>Signature</span>
              <strong>4/4</strong>
            </div>

            <div>
              <span>Subdivision</span>
              <strong>Quarter</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernMetronome;