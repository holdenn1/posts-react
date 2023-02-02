import React from 'react';
import styles from './../../styles.module.scss';
import {Field, useFormik} from 'formik';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import {useRef} from 'react';
import PreviewImage from "./PreviewImage";


export default function AvatarStep({values, setFieldValue}) {
    const fileRef = useRef(null);
    return (
        <FormContainer>
            <PreviewImage file={values.file}/>
            <input
                ref={fileRef}
                type="file"
                className={styles.uploadImg}
                onChange={(event => {
                    setFieldValue('file', event.target.files[0])
                })}
            />

            <TitleForm>Upload your photo</TitleForm>
            <p className={styles.titleDescripton}>
                The photo must contain only your face
            </p>
        </FormContainer>
    );
}
