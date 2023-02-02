import React, {useEffect, useState} from 'react';
import previewAvatar from './../../../../assets/img/icons/avatar.webp'
import styles from "./../../styles.module.scss";

function PreviewImage({file}) {
  const [preview, setPreview] = useState(previewAvatar)
  const reader = new FileReader()

  useEffect(() => {
      if (file) {
        reader.readAsDataURL(file)
        reader.onload = () => {
          setPreview(reader.result)
        }
      }
      return
    },
    [file])

  return (
    <img className={styles.formImg} src={preview} alt=""/>
  );
}

export default PreviewImage;