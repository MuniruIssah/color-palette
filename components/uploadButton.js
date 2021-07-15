import React from 'react'
import styles from '../styles/UploadButton.module.css'
export const UploadButton = () => {
    return (
        // <input   className={styles.uploadButton} />
        <input type='file' className={styles.uploadButton} />
    )
}
