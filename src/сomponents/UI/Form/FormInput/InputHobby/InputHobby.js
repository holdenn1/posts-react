import React, { useContext } from 'react';
import { formContext } from '../../../../Form/formContext';
import styles from './InputHobby.module.scss';

export default function InputHobby() {
	const { formData, setFormData } = useContext(formContext);

	const handleHobby = (select, pos) => {
		const currentHobby = formData.hobby[pos];
		currentHobby.select = !select;
		const hobbiesClone = [...formData.hobby];
		hobbiesClone[pos] = currentHobby;
		setFormData({
			...formData,
			hobby: [...hobbiesClone],
		});
	};
	return (
		<ul className={styles.demandsList}>
			{formData.hobby.map(({ hobby, select }, inx) => {
				return (
					<li key={inx}>
						<input
							type="checkbox"
							name="hobby"
							id={hobby}
							value={hobby}
							checked={select}
							onChange={() => handleHobby(select, inx)}
						/>
						<label htmlFor={hobby}>{hobby}</label>
					</li>
				);
			})}
			{/* {hobbies.map((hobby, inx) => {
				return (
					<li key={inx}>
						<input
							type="checkbox"
							name="hobby"
							id={hobby}
							value={hobby}
							checked={formData.hobby[inx]}
							onChange={() => handleHobby(inx)}
						/>
						<label htmlFor={hobby}>{hobby}</label>
					</li>
				);
			})} */}
		</ul>
	);
}
