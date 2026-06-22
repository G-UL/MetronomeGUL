# React 19 Learning Notes

## React 16 vs React 19

### React 16 (Legacy)

Primarily Class Components.

Example:

class Example extends React.Component {
	state = {
		count: 0
	};

	render() {
		return <div>{this.state.count}</div>;
	}
}

Problems:

- Verbose
- this binding issues
- Lifecycle complexity
- Logic reuse difficult

---

### React 19 (Modern)

Primarily Function Components + Hooks.

Example:

function Example() {
	const [count, setCount] = useState(0);

	return <div>{count}</div>;
}

Benefits:

- Simpler
- Easier state management
- Better code reuse
- Easier testing
- Smaller components

---

## Hooks Used

### useState

Stores component state.

const [bpm, setBpm] = useState(60);

---

### useEffect

Runs side effects.

useEffect(() => {
	console.log("mounted");
}, []);

Used for:

- timers
- audio
- API calls
- subscriptions

---

### useCallback

Caches functions between renders.

const handleClick = useCallback(() => {
	...
}, []);

Used when function identity matters.

---

### useRef

Stores mutable values without re-rendering.

const countRef = useRef(0);

Used for:

- timers
- audio state
- DOM references

---

## Custom Hooks

### useWakeLock

Prevents mobile devices from sleeping while metronome plays.

### useStopwatch

Manages stopwatch display and limit handling.

### useMetronomeAudio

Generates metronome click playback.

### useMetronomeState

Centralized state management.

Acts as the single source of truth for:

- BPM
- Playback state
- Time signature
- Subdivision
- Stopwatch
- Beat visualization

---

## Architectural Lessons

Bad:

Component A has its own state.
Component B has its own state.

Results:

- Duplicate logic
- Synchronization problems

Good:

Shared custom hook owns state.

Component A displays state.
Component B displays state.

Benefits:

- Single source of truth
- Easier maintenance
- Easier testing
- Easier feature additions
