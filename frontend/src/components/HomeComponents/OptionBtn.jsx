// eslint-disable-next-line react/prop-types
const OptionBtn = ({ option, clickedBtn, setClickedBtn, setOptionType }) => {
  const handleClick = (option) => {
    setOptionType(option);
    setClickedBtn(option);
  };
  return (
    <button
      onClick={() => handleClick(option)}
      className={`${clickedBtn === option ? "selected-option" : "option-btn"}`}
    >
      {option}
    </button>
  );
};

export default OptionBtn;
