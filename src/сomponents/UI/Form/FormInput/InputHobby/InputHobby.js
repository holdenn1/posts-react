import React from 'react';
import styles from './InputHobby.module.scss';

export default function InputHobby() {
	return (
		<ul className={styles.demandsList}>
			<li>
				<input type="checkbox" name="hobby" id="music" value="music" />
				<label htmlFor="music">Music</label>
			</li>
			<li>
				<input type="checkbox" name="demand" id="books" value="books" />
				<label htmlFor="books">Books</label>
			</li>
			<li>
				<input type="checkbox" name="hobby" id="soccer" value="soccer" />
				<label htmlFor="soccer">Soccer</label>
			</li>
			<li>
				<input type="checkbox" name="hobby" id="cars" value="cars" />
				<label htmlFor="cars">Cars</label>
			</li>
			<li>
				<input
					type="checkbox"
					name="hobby"
					id="technologies"
					value="technologies"
				/>
				<label htmlFor="technologies">Еechnologies</label>
			</li>
			<li>
				<input type="checkbox" name="hobby" id="photo" value="photo" />
				<label htmlFor="photo">Photo</label>
			</li>
		</ul>
	);
}
