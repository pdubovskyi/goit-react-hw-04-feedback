import { useState } from 'react';
// import { Component } from 'react';

import Statistics from './Statistics/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Apps = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const calcTotal = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  };

  const calcPercent = propName => {
    const total = calcTotal();
    const value = feedback[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  const total = calcTotal();
  const positiveFeedbackPercent = calcPercent('good');
  const { good, neutral, bad } = feedback;

  const countFeedback = name => {
    setFeedback(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      <Section title="Statistic">
        {calcTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countFeedback = name => {
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   countPositiveFeedbackPercentage(propName) {
//     const total = this.countTotalFeedback();
//     const value = this.state[propName];
//     const result = ((value / total) * 100).toFixed(2);
//     return Number(result);
//   }

//   render() {
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercent =
//       this.countPositiveFeedbackPercentage('good');
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.countFeedback}
//           />
//         </Section>
//         <Section title="Statistic">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedbackPercent}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default Apps;
