import React from 'react'
import styles from "../Styles/singleproduct.module.css"

const SingleProduct = ({singledata}) => {
  return (
    <div className={styles.card}>
        <img className={styles.image} src={singledata.imageURL} alt="" />
    </div>
  )
}

export default SingleProduct