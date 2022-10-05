import styles from "./../styles/Forms.module.css";

export default function SelectPlan(props) {
  const { nextBtnClick, previousBtnClick } = props;
  return (
    <div className={styles.formContainer}>
      <h1>Summary form</h1>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <label className={styles.label}>Enter Amount</label>
          <textarea className={styles.textBox} placeholder="Summary"></textarea>
        </div>
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
