import ReactTooltip from 'react-tooltip';
export function CustomBarChart({ datas, options, showHeading }) {
	let tooltop;
	function makeTooltip() {
		return '<em>asd</em>';
	}
	return (
		<>
			<ReactTooltip getContent={makeTooltip} html={true} clickable={true} />
			{showHeading ? (
				<>
					<div style={{ padding: '0px 5px', display: 'inline-block', lineHeight: '40px', position: 'relative', width: '19%', height: 40, overflow: 'hidden' }}>
						<p>sometext</p>
					</div>
				</>
			) : (
				''
			)}

			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: showHeading ? '80%' : '100%', height: 40, overflow: 'hidden' }}>
				<div data-tip="hello world1" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'red', width: '100%', height: 65, overflow: 'hidden' }}></div>
				<div data-tip="hello world2" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'blue', width: '30%', height: 65, overflow: 'hidden' }}></div>
				<div data-tip="hello world3" style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'green', width: '10%', height: 65, overflow: 'hidden' }}></div>

				<div className={'asd'} style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: 65, overflow: 'hidden' }}>
					<p style={{ pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: '30%', height: '100%', width: '100%', textAlign: 'left' }}>graph1</p>
					<p style={{ pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: '10%', height: '100%', width: '100%', textAlign: 'left' }}>graph2</p>
					<p style={{ pointerEvents: 'none', position: 'absolute', top: 0, paddingLeft: 5, left: 0, height: '100%', width: '100%', textAlign: 'left' }}>graph3</p>
				</div>
			</div>
		</>
	);
}
