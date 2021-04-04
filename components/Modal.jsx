import Popup from 'reactjs-popup';

export function Modal({ props, children }) {
	return (
		<>
			<div class="show_micro_mobile">
				<Popup modal trigger={<button> Mais opções</button>}>
					{(close) => {
						return (
							<>
								{children}
								<button
									className="button"
									onClick={() => {
										close();
									}}
								>
									✕
								</button>
							</>
						);
					}}
				</Popup>
			</div>
			<div class="hide_micro_mobile">{children}</div>
		</>
	);
}
