function Progress({ index, points, numQuestions, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
