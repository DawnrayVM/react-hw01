const FeedbackBtn = ({ options, onIncrement }) => {
  return options.map(
    (option, idx) =>
      idx <= 2 && (
        <button key={option} type="button" onClick={onIncrement} name={option}>
          {option
            .slice(0, 1)
            .toUpperCase()
            .concat(option.slice(1, option.length))}
        </button>
      )
  );
};

export default FeedbackBtn;
