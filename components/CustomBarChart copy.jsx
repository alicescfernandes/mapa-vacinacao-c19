/* import ReactTooltip from 'react-tooltip';
export function CustomBarChart({ data, options, showHeading }) {
	let bar3_percentage = '100%';
	let bar2_percentage = (data.datasets.dose_2.data / data.datasets.total.data) * 100 + '%';
	let bar1_percentage = (data.datasets.dose_1.data / data.datasets.total.data) * 100 + '%';

	function makeTooltip() {
		return '<em>asd</em>';
	}
	return (
		<>
			<ReactTooltip getContent={makeTooltip} html={true} clickable={true} />
			{showHeading ? (
				<>
					<div style={{ textAlign: 'left', padding: '0px 5px', display: 'inline-block', lineHeight: '40px', position: 'relative', width: '15%', height: 40, overflow: 'hidden' }}>
						<p>{data.label}</p>
					</div>
				</>
			) : (
				''
			)}

			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: showHeading ? '85%' : '100%', height: 40, overflow: 'hidden' }}>
				<div data-tip="hello world1" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: data.datasets.total.backgroundColor, width: bar3_percentage, height: 65, overflow: 'hidden' }}></div>
				<div data-tip="hello world2" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: data.datasets.dose_2.backgroundColor, width: bar2_percentage, height: 65, overflow: 'hidden' }}></div>
				<div data-tip="hello world3" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: data.datasets.dose_1.backgroundColor, width: bar1_percentage, height: 65, overflow: 'hidden' }}></div>

				<div className={'asd'} style={{ textAlign: 'left', pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: 65, overflow: 'hidden' }}>
					<p style={{ textAlign: 'left', pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: bar1_percentage, height: '100%', width: '100%', textAlign: 'left' }}>{data.datasets.dose_2.data}</p>
					<p style={{ textAlign: 'left', pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: bar2_percentage, height: '100%', width: '100%', textAlign: 'left' }}>{data.datasets.total.data}</p>
					<p style={{ textAlign: 'left', pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: 0, height: '100%', width: '100%', textAlign: 'left' }}>{data.datasets.dose_1.data}</p>
				</div>
			</div>
		</>
	);
}
 */
