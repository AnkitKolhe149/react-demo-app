const JsxPracticeTask = () => {
  // All 4 variables declared inside the component
  const name = "Ankit Kolhe";
  const age = 19;
  const isStudent = true;
  const hasFees = true;

  // Bonus variables
  const city = "Nagpur";
  const marks = 78;

  return (

    <>
      <h2>{name.toUpperCase()}</h2>

      <p>Age: {age}</p>

      {/* 3. Conditional rendering for isStudent */}
      <p>
        Status: {isStudent ? " Currently Studying" : "On Job"}
      </p>
      {hasFees && <button>Pay Fees</button>}

      <hr />
      <p>Hello {name}, from {city}!</p>
      <p>
        Result: {marks >= 40 ? "✅ Passed" : "❌ Failed"}
      </p>
    </>
  );
};

export default JsxPracticeTask;