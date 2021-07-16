import React from "react";
import styles from "../styles/UploadButton.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
export const UploadButton = () => {
  const hiddenFileInput = React.useRef(null);
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        className={styles.fileInput}
      />
      <button onClick={handleClick} className={styles.uploadButton}><FontAwesomeIcon icon={faUpload} className={styles.icon} />Upload Image</button>
    </>
  );
};
