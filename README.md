# G's Metronome

Modern React 19 + TypeScript implementation of the original G's Metronome application.

## Features

- BPM control (20-300 BPM)
- Time signature support
	- 1/4
	- 2/4
	- 3/4
	- 4/4
	- 5/4
	- 6/4
	- 7/4
	- 3/8
	- 5/8
	- 6/8
	- 7/8
	- 9/8
	- 12/8
- Subdivision support
	- Quarter
	- Eighth
	- Triplet
	- Sixteenth
	- Quintuplet
	- Sextuplet
	- Septuplet
	- Octuplet
	- Nonuplet
- Audio playback
- Accent beat support
- Stopwatch
- Automatic stop at 99:59
- Wake Lock support (prevent device screen from sleeping)
- Beat visualization
- Classic theme
- Modern theme

## Technology Stack

- React 19
- TypeScript
- Vite
- Bootstrap 5
- Bootstrap Icons

## Project Structure

src/
├── assets/
├── components/
├── features/
│   └── metronome/
│       ├── hooks/
│       ├── themes/
│       ├── constants.ts
│       ├── types.ts
│       └── MetronomePage.tsx
├── hooks/
│   └── useWakeLock.ts
└── App.tsx

## Installation

npm install

## Development

npm run dev

## Production Build

npm run build

## Future Features

- Tap Tempo
- BPM Presets
- Polyrhythm Mode
- Custom Accent Patterns
- PWA Support
- Offline Mode
- Saved User Preferences
