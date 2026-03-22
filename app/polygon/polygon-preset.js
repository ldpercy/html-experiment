
//
//	Polygon presets
//


export const diHeptagram = {

	polygon : {
		sides			: 7,
		pointStep		: 3,
		startDivision	: 1,
		radius			: 1000,
		copies			: 2,
		copyOffset		: 2,
		copyPaths		: 'separate',
		coordinates		: 'absolute',
		decimalPlaces	: 0,
	},
	style : {
		startColour		: 'hotpink',
		fillOpacity		: '0.5',
		fullRule		: 'evenodd',
		strokeWidth		: '7px',
		strokeDasharray	: '27px 27px',
		antCrawl		: false,
		grid			: true,
		//markers: false,
	},

};




export const triHeptadecagram = {

	polygon : {
		sides			: 17,
		pointStep		: 8,
		startDivision	: 2,
		radius			: 1100,
		copies			: 3,
		copyOffset		: 4,
		copyPaths		: 'separate',
		coordinates		: 'absolute',
		decimalPlaces	: 0,
	},
	style : {
		colourScheme	: 'dark',
		startColour		: 'forestgreen',
		fillOpacity		: '0.2',
		fullRule		: 'evenodd',
		strokeWidth		: '7ex',
		strokeDasharray	: '4px 4em',

		strokeLinejoin	: 'round',
		strokeLinecap	: 'butt',

		antCrawl		: true,
		grid			: false,
		//markers: false,
	},

};