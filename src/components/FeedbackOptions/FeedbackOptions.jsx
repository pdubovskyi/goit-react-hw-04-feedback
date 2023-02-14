import propTypes from 'prop-types';

import styles from './feedback-optins.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      className={styles.btn}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};

export default FeedbackOptions;
