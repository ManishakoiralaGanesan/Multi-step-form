import styles from "./../styles/Forms.module.css";
export default function DetailsForm(props) {
  const { nextBtnClick, previousBtnClick, isPrevDisable } = props;
  return (
    <div className={styles.formContainer}>
      <h2>Welcome to PD Insurance Let’s start with your pet’s details</h2>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <label className={styles.label}>What Is Your Pet’s Name?</label>
          <input
            className={styles.textBox}
            type="text"
            placeholder="Pet Name"
          ></input>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>Select What Your Pet Is</label>
          <div className={styles.radio}>
            <input type="radio" name="dog" value="Dog"></input>
            <label>Dog</label>
            <input type="radio" name="cat" value="Cat"></input>
            <label>Cat</label>
          </div>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>What Breed Is Your Pet?</label>
          <select placeholder="Select Breed" className={styles.textBox}>
            <option>Aberdeen Terrier</option>
            <option>Aberdeen Terrier Cross</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>Select what your pet is?</label>
          <div className={styles.radio}>
            <input type="radio" name="dog" value="Dog"></input>
            <label>Male</label>
            <input type="radio" name="cat" value="Cat"></input>
            <label>Female</label>
          </div>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            What Is Your Pet Date of Birth?
          </label>
          <input
            className={styles.textBox}
            type="date"
            placeholder="Pet Date of Birth"
          ></input>
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label}>
            Where Did You First Hear About Us?
          </label>
          <select placeholder="Please Select" className={styles.textBox}>
            <option>Google</option>
            <option>Facebook</option>
          </select>
        </div>
        <div className={styles.buttonBox}>
          <button
            className={styles.prevbutton}
            onClick={previousBtnClick}
            disabled={isPrevDisable()}
          >
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
