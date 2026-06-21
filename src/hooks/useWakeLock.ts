// React
import {useEffect,
		useRef} from "react";


function
useWakeLock(isEnabled: boolean)
{
	const wakeLockRef = useRef<WakeLockSentinel | null>(null);


	useEffect(
		() => {
			const requestWakeLock = async () => {
				try
				{
					if (isEnabled &&
						"wakeLock" in navigator &&
						navigator.wakeLock)
					{
						wakeLockRef.current = await navigator.wakeLock.request("screen");
					}
				}
				catch (error)
				{
					console.error("Wake Lock error:",
								  error);
				}
			};


			const releaseWakeLock = async () => {
				try
				{
					await wakeLockRef.current?.release();
					wakeLockRef.current = null;
				}
				catch (error)
				{
					console.error("Wake Lock release error:",
								  error);
				}
			};

			if (isEnabled)
			{
				requestWakeLock();
			}
			else
			{
				releaseWakeLock();
			}

			return () => {
				releaseWakeLock();
			};
		},
		[isEnabled]
	);
}


export default useWakeLock;
