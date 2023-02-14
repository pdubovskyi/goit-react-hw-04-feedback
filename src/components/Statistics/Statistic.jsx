import propTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.item}>Good: {good} </p>
      <p className={styles.item}>Neutral: {neutral}</p>
      <p className={styles.item}>Bad:{bad} </p>
      <p className={styles.item}>Total:{total} </p>
      <p className={styles.item}>Positive feedback:{positivePercentage} </p>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
