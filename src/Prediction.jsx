function Prediction({ prediction }) {
  return (
    <>
      {prediction != null && (
        <div>
          <h2 className="result">
            {prediction === 1 ? "🔥 Fire likely" : "🌿 No fire likely"}
          </h2>
        </div>
      )}
    </>
  );
}

export default Prediction;
