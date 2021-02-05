//  import { useEffect, useState } from 'react';
import { useState } from 'react';
import { FOREGROUND_COLOR, COLOR_1, COLOR_2, COLOR_3, COLOR_4 } from '../constants';

export function useColors() {
	let [colors, setColors] = useState([FOREGROUND_COLOR, COLOR_1, COLOR_2, COLOR_3, COLOR_4]);
	let [foreground, color_1, color_2, color_3, color_4] = colors;
	return { colors: [foreground, color_1, color_2, color_3, color_4], setColors };
}
