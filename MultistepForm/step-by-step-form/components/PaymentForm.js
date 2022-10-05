import styles from "./../styles/Forms.module.css";

export default function SelectPlan(props) {
  const { nextBtnClick, previousBtnClick } = props;
  return (
    <div className={styles.formContainer}>
      <h1>Payment form</h1>
      <div className={styles.inputBox}>
        <label className={styles.label}>Enter Amount</label>
        <input
          className={styles.textBox}
          type="text"
          placeholder="Amount"
        ></input>
      </div>{" "}
      <div className={styles.buttonBox}>
        <button className={styles.prevbutton} onClick={previousBtnClick}>
          Previous
        </button>
        <button className={styles.nextbutton} onClick={nextBtnClick}>
          Next
        </button>
      </div>
    </div>
  );
}
