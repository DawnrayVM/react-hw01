import { useState, useEffect } from 'react';
import FeedbackStats from './FeedbackStats';
import './Feedback.module.css';
import FeedbackBtn from './FeedbackBtn';

const initialState = {
  bad: 0,
  good: 0,
  neutral: 0,
  total: 0,
  positive: 0,
};

const Feedback = () => {
  const [state, setState] = useState(initialState);

  const countTotal = (a, b, c) => a + b + c;
  const countPositive = (a, b, c) =>
    c && Number(Math.round(((a + b) * 100) / c));

  const handleFeedback = ({ target: { name } }) => {
    name === 'refresh'
      ? setState(initialState)
      : setState(prevState => ({
          ...prevState,
          [name]: prevState[name] + 1,
        }));
  };

  useEffect(
    () =>
      setState(prevState => ({
        ...prevState,
        total: countTotal(state.bad, state.good, state.neutral),
        positive: countPositive(state.good, state.neutral, state.total),
      })),
    [state.bad, state.good, state.neutral, state.total]
  );

  return (
    <>
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackBtn
          options={Object.keys(state)}
          onIncrement={handleFeedback}
        />
        <button type="button" onClick={handleFeedback} name="refresh">
          Refresh
        </button>
      </div>
      {state.total ? (
        <FeedbackStats stats={state} title="Statistics" />
      ) : (
        <h2>No feedbacks yet</h2>
      )}
    </>
  );
};

export default Feedback;
