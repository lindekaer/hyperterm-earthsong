'use strict';

const black           = '#161a1f'
const red             = '#d55843'
const green           = '#95cc5e'
const yellow          = '#f8bb3b'
const blue            = '#01a8c6'
const magenta         = '#db784d'
const cyan            = '#60a365'
const white           = '#ebd0b8'
const lightBlack      = '#7a7267'
const lightRed        = '#ff7c6c'
const lightGreen      = '#a6e245'
const lightYellow     = '#e6db74'
const lightBlue       = '#6de0ff'
const lightMagenta    = '#ffa47c'
const lightCyan       = '#93ef9a'
const lightWhite      = '#f8f8f0'
const foregroundColor = '#ebd1b7';
const backgroundColor = '#36312b';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: lightBlack,
	cursorColor: lightBlack,
	colors: {
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		lightBlack,
		lightRed,
		lightGreen,
		lightYellow,
		lightBlue,
		lightMagenta,
		lightCyan,
		lightWhite
	},
	css: `
		${config.css}
		.tab_active:before {
			border-color: ${yellow};
		}
	`
});
