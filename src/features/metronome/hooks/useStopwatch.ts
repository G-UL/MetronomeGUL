// React
import {useEffect, useState} from "react";

// Projects
import {STOPWATCH_LIMIT_SECONDS} from "../constants";


function
formatStopwatch(secondsElapsed: number)
{
	const minutes = Math.floor(secondsElapsed / 60);
	const seconds = secondsElapsed % 60;

	return [String(minutes).padStart(2,
									 "0"),
			String(seconds).padStart(2,
									 "0")].join(":");
}


function
useStopwatch(isPlaying: boolean,
			 onLimitReached: () => void)
{
	const [secondsElapsed, setSecondsElapsed] = useState(0);


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
							if (STOPWATCH_LIMIT_SECONDS <= current)
							{
								onLimitReached();

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
		[isPlaying, onLimitReached]
	);

	return {resetStopwatch,
			stopwatchDisplay: formatStopwatch(secondsElapsed)};
}


export default useStopwatch;
