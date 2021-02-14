import { HorizontalBar } from 'react-chartjs-2';

export function CustomBarChart({ options, data, showHeading }) {
	return (
		<>
			{showHeading ? (
				<>
					<div className={'subchart-data'}>
						<p>
							<span>
								<span></span>1ª Dose
							</span>{' '}
							<span>
								<span></span>2ª Dose
							</span>{' '}
							<span>
								<span></span>População-Alvo
							</span>
						</p>
					</div>
				</>
			) : (
				''
			)}
			<div style={{ display: 'inline-block', lineHeight: '40px', position: 'relative', width: '80%', height: 65, overflow: 'hidden' }}>
				<HorizontalBar options={options} data={data}></HorizontalBar>
			</div>
			<div style={{ padding: '0px 5px', display: 'inline-block', lineHeight: '65px', position: 'relative', width: '19%', overflow: 'hidden' }}>
				<p>sometext</p>
			</div>
		</>
	);
}
