import React from 'react';
import styles from './../../styles.module.scss';
import FormContainer from '../../../UI/Form/FormContainer/FormContainer';
import TitleForm from '../../../UI/Form/TitleForm/TitleForm';
import {useRef} from 'react';
import PreviewImage from "./PreviewImage";
import ErrorFormText from "../../../Errors/ErrorFormText";


export default function AvatarStep({values, setFieldValue, ...props}) {
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
          {props.touched.file && props.errors.file ? <ErrorFormText>{props.errors.file}</ErrorFormText> : null}
        </FormContainer>
    );
}
