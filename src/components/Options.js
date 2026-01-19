function Options({ question }) {
  return (
    <>
      {question.options.map((option) => (
        <div className="options">
          <button className="btn btn-option">{option}</button>
        </div>
      ))}
    </>
  );
}

export default Options;
