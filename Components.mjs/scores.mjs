function Score({ score }) {
    return (
      <div className="card">
        <p>Date: {score.date}</p>
        <p>Score: {score.score}</p>
      </div>
    );
  }
  
  export default Score;