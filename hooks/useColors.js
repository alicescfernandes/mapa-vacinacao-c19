//  import { useEffect, useState } from 'react';
import { useState } from 'react';
import * as constants from '../constants';

export function useColors() {
	let [colors, setColors] = useState([constants.FOREGROUND_COLOR, constants.COLOR_1, constants.COLOR_2, constants.COLOR_3, constants.COLOR_4]);

	let [tints, setTints] = useState([constants.TINT_30, constants.TINT_50, constants.TINT_70]);
	let [shades, setShades] = useState([constants.SHADE_30, constants.SHADE_50, constants.SHADE_70]);
	let [complements, setComplements] = useState([constants.COMPLEMENT_1, constants.COMPLEMENT_2, constants.COMPLEMENT_3]);

	let [foreground, color_1, color_2, color_3, color_4] = colors;
	return {
		colors: [foreground, color_1, color_2, color_3, color_4],
		colors_v2: {
			main: constants.FOREGROUND_COLOR,
			tints,
			shades,
			complements,
		},
		setColors,
	};
}
