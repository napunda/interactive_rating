import styles from "./styles/Rating.module.css";
import star from "../assets/images/icon-star.svg";

function Rating() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={star} alt="Star" />
        <h2>How did we do ?</h2>
        <p>
          How did we do? Please let us know how we did with your support
          request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button key={rating}>{rating}</button>
          ))}
        </div>
        <div className={styles.submit_button}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Rating;
