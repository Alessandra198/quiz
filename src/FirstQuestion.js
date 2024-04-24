import React from "react";

export default function FirstQuestion() {
  function handleResponse(event) {
    event.preventDefault();
    if (event.target.value === "correct") {
      alert("Yayy you're right!");
    } else if (event.target.value === "wrong") {
      alert("Opss, try again!");
    }
  }
  return (
    <div className="FirstQuestion">
      <h6>Who are the two best friends of Harry Potter?</h6>
      <select name="first" onChange={handleResponse}>
        <option value="">Choose one</option>
        <option value="wrong">Luna and Neville</option>
        <option value="correct">Ron and Hermione</option>
        <option value="wrong">Draco and Hermione</option>
        <option value="wrong">Ron and Neville</option>
        <option value="wrong">William and Kate</option>
      </select>
    </div>
  );
}
