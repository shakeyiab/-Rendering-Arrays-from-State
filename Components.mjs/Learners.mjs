function Learner({ learner }) {
    return (
        <div className="learnerInfo">
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            <h3>Scores:</h3>
            <ul>
                {learner.scores.map((score, i) => (
                    <li key={i}>
                        <Score score={score} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Learner;