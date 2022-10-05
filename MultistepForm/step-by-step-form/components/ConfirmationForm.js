import styles from "./../styles/Forms.module.css";

export default function SelectPlan(props) {
  const { nextBtnClick, previousBtnClick } = props;
  return (
    <div className={styles.formContainer}>
      <h1>Confirmation form</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.textBox}
          type="text"
          placeholder="Confirmation"
        ></input>
        <div className={styles.buttonBox}>
          <button className={styles.prevbutton} onClick={previousBtnClick}>
            Previous
          </button>
          <button className={styles.nextbutton} onClick={nextBtnClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
