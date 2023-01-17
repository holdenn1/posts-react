import React, { useEffect, useRef, useState } from 'react';
import styles from './UserCard.module.scss';

export default function UserCard() {
	const [data, setDate] = useState([]);
	const start = useRef(0)
	const limit = useRef(8)

	useEffect(() => {
		fetch(`http://localhost:3000/users?_start=${start.current}&_limit=${limit.current}`)
			.then((response) => response.json())
			.then((data) => setDate(data));
	},[]);
	console.log(data);

	return (
		<>
			{data.map(item  => {
				return (
					<div key={item.id} className={styles.container}>
						<img
							className={styles.avatar}
							src={item.photo}
							alt=""
						/>
						<div className={styles.info}>
							<h3 className={styles.name}>{item.name}</h3>
							<h4 className={styles.age}>Age: {item.age}</h4>
							<p className={styles.site}>{item.website}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
