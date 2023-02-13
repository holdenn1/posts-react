import React, { useState} from 'react';
import styles from './Filter.module.scss';
import filterIcon from './../../assets/img/icons/icons8-funnel-50.png';
import classNames from 'classnames';
import {useDispatch} from "react-redux";
import {fetchSearchUsers} from "../../store/actions/search/fetchSearchUsers";

export default function Filter(props) {
  const [visible, setVisible] = useState(false);
  const [inputAge, setInputAge] = useState('');
  const dispatch = useDispatch()

  function searchUsers() {
    dispatch(fetchSearchUsers(inputAge))
    setInputAge(' ')
    setVisible(!visible)
  }

  return (
    <>
      <div
        className={classNames(styles.filter, {
          [styles.filterActive]: visible,
        })}
        onClick={() => setVisible(!visible)}
      >
        <div
          className={styles.filterContent}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.filterTitle}>Filter</h3>
          <input
            value={inputAge}
            onChange={(e) => setInputAge(e.target.value)}
            className={styles.filterInput}
            type="text"
            placeholder="Input age"
          />
          <button
            onClick={searchUsers}
            className={styles.searchBtn}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
      <img
        className={styles.filterBtn}
        src={filterIcon}
        alt="#"
        onClick={() => setVisible(!visible)}
      />
    </>
  );
}
