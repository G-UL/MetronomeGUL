// React
import {useState} from "react";

// Projects
import useWakeLock from "../../../hooks/useWakeLock";
import {SUBDIVISIONS,
		TIME_SIGNATURES} from "../constants";
import type {MetronomeState} from "../types";
import useMetronomeAudio from "./useMetronomeAudio";
import useStopwatch from "./useStopwatch";


function
useMetronomeState(): MetronomeState
{
	const [bpm, setBpm] = useState(60);
	const [isPlaying, setIsPlaying] = useState(false);
	const [subdivisionIndex, setSubdivisionIndex] = useState(0);
	const [timeSignatureIndex, setTimeSignatureIndex] = useState(3);

	const subdivision = SUBDIVISIONS[subdivisionIndex];
	const timeSignature = TIME_SIGNATURES[timeSignatureIndex];

	const {resetStopwatch, stopwatchDisplay} = useStopwatch(
		isPlaying,
		() => setIsPlaying(false)
	);


	useWakeLock(isPlaying);


	useMetronomeAudio({bpm,
					   isPlaying,
					   subdivisionIndex,
					   timeSignature});


	const updateAndReset = (callback: () => void) => {
		callback();
		resetStopwatch();
	};


	return {
		bpm,
		isPlaying,
		stopwatchDisplay,
		subdivision,
		timeSignature,
		subdivisionIndex,
		timeSignatureIndex,

		decreaseBpm: () => updateAndReset(
			() => setBpm((current) => Math.max(20, current - 1))
		),

		increaseBpm: () => updateAndReset(
			() => setBpm((current) => Math.min(300, current + 1))
		),

		setBpmValue: (value: number) => updateAndReset(
			() => setBpm(value)
		),

		previousSubdivision: () => updateAndReset(
			() => setSubdivisionIndex(
				(current) => current === 0 ?
					SUBDIVISIONS.length - 1 :
					current - 1
			)
		),

		nextSubdivision: () => updateAndReset(
			() => setSubdivisionIndex(
				(current) => current === SUBDIVISIONS.length - 1 ?
					0 :
					current + 1
			)
		),

		previousTimeSignature: () => updateAndReset(
			() => setTimeSignatureIndex(
				(current) => current === 0 ?
					TIME_SIGNATURES.length - 1 :
					current - 1
			)
		),

		nextTimeSignature: () => updateAndReset(
			() => setTimeSignatureIndex(
				(current) => current === TIME_SIGNATURES.length - 1 ?
					0 :
					current + 1
			)
		),

		togglePlaying: () => setIsPlaying((current) => !current),
	};
}


export default useMetronomeState;
