function ScoreSheet() {
  return (
    <div className="flex flex-row justify-between">
      {[1, 2].map((player) => (
        <div>
          <div>{player}</div>
          <div>Scores</div>
        </div>
      ))}
    </div>
  );
}

export default ScoreSheet;
