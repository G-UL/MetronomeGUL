// React
import {useEffect,
		useRef} from "react";

// Projects
import accentSound from "../../../assets/sounds/Accent.flac";
import clickSound from "../../../assets/sounds/SubAccent.mp3";
import subAccentSound from "../../../assets/sounds/Runner.flac";


type UseMetronomeAudioProps = {bpm: number;
							   isPlaying: boolean;
							   onBeatChange: (beat: number) => void;
							   subdivisionIndex: number;
							   timeSignature: string};


function
getBeatCount(timeSignature: string)
{
	return Number(timeSignature.split("/")[0]);
}


function
useMetronomeAudio({bpm,
				   isPlaying,
				   onBeatChange,
				   subdivisionIndex,
				   timeSignature}: UseMetronomeAudioProps)
{
	const countRef = useRef(0);


	useEffect(
		() => {
			if (!isPlaying)
			{
				countRef.current = 0;
				onBeatChange(0);

				return;
			}

			const accent = new Audio(accentSound);
			const click = new Audio(clickSound);
			const subAccent = new Audio(subAccentSound);

			const beatCount = getBeatCount(timeSignature);
			const subdivision = subdivisionIndex + 1;
			const totalCount = beatCount * subdivision;
			const intervalMs = 60000 / (bpm * subdivision);

			const playSound = () => {
				const currentCount = countRef.current;
				const currentBeat = Math.floor(currentCount / subdivision);
				onBeatChange(currentBeat);
				if (currentCount === 0)
				{
					accent.currentTime = 0;
					accent.play();
				}
				else if (currentCount % subdivision === 0)
				{
					subAccent.currentTime = 0;
					subAccent.play();
				}
				else
				{
					click.currentTime = 0;
					click.play();
				}

				countRef.current = (currentCount + 1) % totalCount;
			};

			playSound();

			const intervalId = window.setInterval(playSound,
												  intervalMs);

			return () => {
				window.clearInterval(intervalId);
				countRef.current = 0;
			};
		},
		[bpm,
		 isPlaying,
		 onBeatChange,
		 subdivisionIndex,
		 timeSignature]
	);
}


export default useMetronomeAudio;
