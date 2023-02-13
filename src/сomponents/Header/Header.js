import React from 'react';
import Filter from '../Filter/Filter';
import MainForm from '../Form';
import styles from './Header.module.scss';
import {useParams} from "react-router-dom";

export default function Header({title}) {
  const {id} = useParams()
  return (
    <header className={styles.header}>
      <a href="/" className={styles.title}>{title}</a>
      {!!id ? '' : <Filter/>}
      <MainForm/>
    </header>
  );
}
