export type MetronomeState = {
	bpm: number;
	isPlaying: boolean;
	stopwatchDisplay: string;
	subdivision: string;
	timeSignature: string;
	subdivisionIndex: number;
	timeSignatureIndex: number;
	decreaseBpm: () => void;
	increaseBpm: () => void;
	setBpmValue: (value: number) => void;
	previousSubdivision: () => void;
	nextSubdivision: () => void;
	previousTimeSignature: () => void;
	nextTimeSignature: () => void;
	togglePlaying: () => void;
};
