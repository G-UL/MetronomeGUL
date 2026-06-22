export type MetronomeState = {
	beatCount: number;
	bpm: number;
	currentBeat: number;
	isPlaying: boolean;
	stopwatchDisplay: string;
	subdivision: string;
	subdivisionIndex: number;
	timeSignature: string;
	timeSignatureIndex: number;
	decreaseBpm: () => void;
	increaseBpm: () => void;
	nextSubdivision: () => void;
	nextTimeSignature: () => void;
	previousSubdivision: () => void;
	previousTimeSignature: () => void;
	setBpmValue: (value: number) => void;
	togglePlaying: () => void;
};
