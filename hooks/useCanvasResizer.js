//  import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { RESIZE_TRESHOLD } from '../constants';

export function useCanvasResizer() {
	let canvasLoaded = false;
	let [canvasNode, setCanvasNode] = useState(false);

	function attatchResizer(canvasNode) {
		if (canvasLoaded === false && canvasNode !== false) {
			canvasLoaded = true;

			if (window.innerWidth <= RESIZE_TRESHOLD) {
				canvasNode.style.width = RESIZE_TRESHOLD + 'px';
			} else {
				canvasNode.style.width = 'auto';
			}
			window.addEventListener('resize', () => {
				if (window.innerWidth <= RESIZE_TRESHOLD) {
					canvasNode.style.width = RESIZE_TRESHOLD + 'px';
				} else {
					canvasNode.style.width = '100%';
				}
			});

			return () => {
				window.removeEventListener('resize', () => {
					if (window.innerWidth <= RESIZE_TRESHOLD) {
						canvasNode.style.width = RESIZE_TRESHOLD + 'px';
					} else {
						canvasNode.style.width = '100%';
					}
				});
			};
		}
	}

	useEffect(() => attatchResizer(canvasNode), [canvasNode]);

	return {
		canvasNode,
		setCanvasNode,
	};
}
