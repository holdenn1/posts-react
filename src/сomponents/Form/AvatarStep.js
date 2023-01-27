import React from 'react';
import styles from './styles.module.scss';
import avatar from './../../assets/img/icons/avatar.webp';
import TitleForm from '../UI/Form/TitleForm/TitleForm';
import { useState } from 'react';
import { useContext } from 'react';
import { formContext } from './formContext';
import { useEffect } from 'react';

export default function AvatarStep() {
	const [preview, setPreview] = useState(avatar);
	const { formData, setFormData } = useContext(formContext);

	useEffect(() => {
		if (!formData.avatar) {
			setPreview(avatar);
			return;
		}
		const objectUrl = URL.createObjectURL(formData.avatar);
		setPreview(objectUrl);
		return () => URL.revokeObjectURL(objectUrl);
	}, [formData.avatar]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setFormData({
				...formData,
				avatar: avatar,
			});
			return;
		}
		setFormData({
			...formData,
			avatar: e.target.files[0],
		});
	};
	return (
		<div className={styles.formContainer}>
			<img className={styles.formImg} src={preview} alt="" />
			<input type="file" className={styles.uploadImg} onChange={onSelectFile} />
			<TitleForm>Upload your photo</TitleForm>
			<p className={styles.titleDescripton}>
				The photo must contain only your face
			</p>
		</div>
	);
}
