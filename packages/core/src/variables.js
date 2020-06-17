// MODES

const xyzModes = ['in', 'out', 'appear']
const xyzModesAll = ['all', ...xyzModes]
const xyzModeMove = 'move'

// LEVELS

const xyzIndexLevels = 20

const xyzEaseLevels = {
	ease: 'ease',
	linear: 'linear',
	in: 'ease-in',
	'in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
	out: 'ease-out',
	'out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
	'in-out': 'ease-in-out',
	'in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
}

const xyzTimeLevels = {
	'0': '0s',
	'1': '.1s',
	'2': '.2s',
	'3': '.3s',
	'4': '.4s',
	'5': '.5s',
	'10': '1s',
	'15': '1.5s',
	'20': '2s',
	'25': '2.5s',
	'30': '3s',
}

const xyzIterateLevels = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	infinite: 'infinite',
}

const xyzOriginLevels = {
	center: 'center',
	top: 'top',
	bottom: 'bottom',
	left: 'left',
	right: 'right',
	'top-left': 'top left',
	'top-right': 'top right',
	'bottom-left': 'bottom left',
	'bottom-right': 'bottom right',
}

const xyzFadeLevels = {
	'0': '0',
	'25': '.25',
	'50': '.5',
	'75': '.75',
	'100': '1',
}

const xyzTranslateLevels = {
	'0': '0px',
	'1': '10px',
	'2': '20px',
	'3': '30px',
	'4': '40px',
	'5': '50px',
	'25': '25%',
	'50': '50%',
	'75': '75%',
	'100': '100%',
}

const xyzTranslateZLevels = {
	'0': '0px',
	'1': '10px',
	'2': '20px',
	'3': '30px',
	'4': '40px',
	'5': '50px',
}

const xyzRotateLevels = {
	'0': '0deg',
	'1': '10deg',
	'2': '20deg',
	'3': '30deg',
	'4': '40deg',
	'5': '50deg',
	'25': '.25turn',
	'50': '.50turn',
	'75': '.75turn',
	'100': '1turn',
}

const xyzScaleLevels = {
	'0': '0',
	'1': '0.025',
	'2': '0.05',
	'3': '0.075',
	'4': '0.1',
	'5': '0.125',
	'25': '.25',
	'50': '.5',
	'75': '.75',
	'100': '1',
}

// VARIABLES

const xyzVariablesMap = {
	keyframes: {
		type: 'keyframes',
		modes: xyzModesAll,
	},
	ease: {
		type: 'ease',
		modes: [...xyzModesAll, xyzModeMove],
	},
	duration: {
		type: 'duration',
		modes: [...xyzModesAll, xyzModeMove],
	},
	delay: {
		type: 'delay',
		modes: [...xyzModesAll, xyzModeMove],
	},
	stagger: {
		type: 'stagger',
		modes: xyzModesAll,
	},
	'stagger-rev': {
		type: 'stagger',
		modes: xyzModesAll,
	},
	iterate: {
		type: 'iterate',
		modes: xyzModesAll,
	},
	origin: {
		type: 'origin',
		modes: xyzModesAll,
	},
	fade: {
		type: 'fade',
		modes: xyzModesAll,
	},
	transform: {
		type: 'transform',
		modes: xyzModesAll,
	},
	'translate-x': {
		type: 'translate',
		axis: 'x',
		modes: xyzModesAll,
	},
	'translate-y': {
		type: 'translate',
		axis: 'y',
		modes: xyzModesAll,
	},
	'translate-z': {
		type: 'translate',
		axis: 'z',
		modes: xyzModesAll,
	},
	'rotate-x': {
		type: 'rotate',
		axis: 'x',
		modes: xyzModesAll,
	},
	'rotate-y': {
		type: 'rotate',
		axis: 'y',
		modes: xyzModesAll,
	},
	'rotate-z': {
		type: 'rotate',
		axis: 'z',
		modes: xyzModesAll,
	},
	'scale-x': {
		type: 'scale',
		axis: 'x',
		modes: xyzModesAll,
	},
	'scale-y': {
		type: 'scale',
		axis: 'y',
		modes: xyzModesAll,
	},
	'scale-z': {
		type: 'scale',
		axis: 'z',
		modes: xyzModesAll,
	},
}

// UTILITIES

const xyzUtilitiesMap = {
	// Timings
	ease: {
		type: 'ease',
		vars: ['ease'],
		default: 'var(--xyz-ease-default)',
		levels: xyzEaseLevels,
		modes: [...xyzModesAll, xyzModeMove],
	},
	duration: {
		type: 'duration',
		vars: ['duration'],
		default: 'var(--xyz-duration-default)',
		levels: xyzTimeLevels,
		modes: [...xyzModesAll, xyzModeMove],
	},
	delay: {
		type: 'delay',
		vars: ['delay'],
		default: 'var(--xyz-delay-default)',
		levels: xyzTimeLevels,
		modes: [...xyzModesAll, xyzModeMove],
	},
	stagger: {
		type: 'stagger',
		vars: ['stagger'],
		default: 'var(--xyz-stagger-default)',
		levels: xyzTimeLevels,
		modes: xyzModesAll,
	},
	'stagger-rev': {
		type: 'stagger',
		vars: ['stagger-rev'],
		default: 'var(--xyz-stagger-default)',
		levels: xyzTimeLevels,
		modes: xyzModesAll,
	},
	iterate: {
		type: 'iterate',
		vars: ['iterate'],
		default: 'var(--xyz-iterate-default)',
		levels: xyzIterateLevels,
		modes: xyzModesAll,
	},

	// Origins
	origin: {
		type: 'origin',
		vars: ['origin'],
		default: 'var(--xyz-origin-default)',
		levels: xyzOriginLevels,
		modes: xyzModesAll,
	},

	// Fades
	fade: {
		type: 'fade',
		vars: ['fade'],
		default: 'calc(1 - var(--xyz-fade-default))',
		levels: xyzFadeLevels,
		transformer: 'xyz-one-minus-val',
		modes: xyzModesAll,
	},

	// Translations
	right: {
		type: 'translate',
		axis: 'x',
		vars: ['translate-x'],
		default: 'var(--xyz-translate-default)',
		levels: xyzTranslateLevels,
		modes: xyzModesAll,
	},
	left: {
		type: 'translate',
		axis: 'x',
		vars: ['translate-x'],
		default: 'calc(var(--xyz-translate-default) * -1)',
		levels: xyzTranslateLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},
	down: {
		type: 'translate',
		axis: 'y',
		vars: ['translate-y'],
		default: 'var(--xyz-translate-default)',
		levels: xyzTranslateLevels,
		modes: xyzModesAll,
	},
	up: {
		type: 'translate',
		axis: 'y',
		vars: ['translate-y'],
		default: 'calc(var(--xyz-translate-default) * -1)',
		levels: xyzTranslateLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},
	front: {
		type: 'translate',
		axis: 'z',
		vars: ['translate-z'],
		default: 'var(--xyz-translate-default)',
		levels: xyzTranslateZLevels,
		modes: xyzModesAll,
	},
	back: {
		type: 'translate',
		axis: 'z',
		vars: ['translate-z'],
		default: 'calc(var(--xyz-translate-default) * -1)',
		levels: xyzTranslateZLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},

	// Rotations
	'flip-up': {
		type: 'rotate',
		axis: 'x',
		vars: ['rotate-x'],
		default: 'var(--xyz-rotate-default)',
		levels: xyzRotateLevels,
		modes: xyzModesAll,
	},
	'flip-down': {
		type: 'rotate',
		axis: 'x',
		vars: ['rotate-x'],
		default: 'calc(var(--xyz-rotate-default) * -1)',
		levels: xyzRotateLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},
	'flip-left': {
		type: 'rotate',
		axis: 'y',
		vars: ['rotate-y'],
		default: 'var(--xyz-rotate-default)',
		levels: xyzRotateLevels,
		modes: xyzModesAll,
	},
	'flip-right': {
		type: 'rotate',
		axis: 'y',
		vars: ['rotate-y'],
		default: 'calc(var(--xyz-rotate-default) * -1)',
		levels: xyzRotateLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},
	'turn-cw': {
		type: 'rotate',
		axis: 'z',
		vars: ['rotate-z'],
		default: 'var(--xyz-rotate-default)',
		levels: xyzRotateLevels,
		modes: xyzModesAll,
	},
	'turn-ccw': {
		type: 'rotate',
		axis: 'z',
		vars: ['rotate-z'],
		default: 'calc(var(--xyz-rotate-default) * -1)',
		levels: xyzRotateLevels,
		transformer: 'xyz-negative-val',
		modes: xyzModesAll,
	},

	// Scales
	small: {
		type: 'scale',
		axis: 'all',
		vars: ['scale-x', 'scale-y', 'scale-z'],
		default: 'calc(1 - var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-minus-val',
		modes: xyzModesAll,
	},
	big: {
		type: 'scale',
		axis: 'all',
		vars: ['scale-x', 'scale-y', 'scale-z'],
		default: 'calc(1 + var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-plus-val',
		modes: xyzModesAll,
	},
	narrow: {
		type: 'scale',
		axis: 'x',
		vars: ['scale-x'],
		default: 'calc(1 - var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-minus-val',
		modes: xyzModesAll,
	},
	wide: {
		type: 'scale',
		axis: 'x',
		vars: ['scale-x'],
		default: 'calc(1 + var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-plus-val',
		modes: xyzModesAll,
	},
	short: {
		type: 'scale',
		axis: 'y',
		vars: ['scale-y'],
		default: 'calc(1 - var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-minus-val',
		modes: xyzModesAll,
	},
	tall: {
		type: 'scale',
		axis: 'y',
		vars: ['scale-y'],
		default: 'calc(1 + var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-plus-val',
		modes: xyzModesAll,
	},
	thin: {
		type: 'scale',
		axis: 'z',
		vars: ['scale-z'],
		default: 'calc(1 - var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-minus-val',
		modes: xyzModesAll,
	},
	thick: {
		type: 'scale',
		axis: 'z',
		vars: ['scale-z'],
		default: 'calc(1 + var(--xyz-scale-default))',
		levels: xyzScaleLevels,
		transformer: 'xyz-one-plus-val',
		modes: xyzModesAll,
	},
}

module.exports = {
	xyzModes,
	xyzModesAll,
	xyzModeMove,
	xyzIndexLevels,
	xyzEaseLevels,
	xyzTimeLevels,
	xyzIterateLevels,
	xyzOriginLevels,
	xyzFadeLevels,
	xyzTranslateLevels,
	xyzTranslateZLevels,
	xyzRotateLevels,
	xyzScaleLevels,
	xyzVariablesMap,
	xyzUtilitiesMap,
}