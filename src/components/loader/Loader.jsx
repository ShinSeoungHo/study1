import React from 'react'
import styles from './Loader.module.scss';
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({basic}) => {

  if(basic) {
    return(
      <div className={styles.basicWrapper}>
        <RotatingLines
          strokeColor='grey'
          strokeWidth='5'
          animationDuration='0.75'
          width='30'
          visible={true}
        />
      </div>
    )
  }

  return (
    <div className={styles.wrappe}>
      <div className={styles.loader}>
        <RotatingLines
          strokeColor='grey'
          strokeWidth='5'
          animationDuration='0.75'
          width='30'
          visible={true}
        />
      </div>
    </div>
  )
}

export default Loader
