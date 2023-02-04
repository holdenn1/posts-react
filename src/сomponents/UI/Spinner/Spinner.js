import React from 'react';
import style from './Spinner.module.scss';

export default function Spinner() {
	return (
		<>
			<div className={style.spinnerWrap}>
				<div className={style.container}>
					<div className={style.spinner}></div>
				</div>
			</div>
		</>
	);
}
