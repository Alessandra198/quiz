import React from "react";
import "./Questions.css";

export default function Questions() {
  function handleResponse(event) {
    event.preventDefault();
    if (event.target.value === "correct") {
      alert("Yayy you're right!");
    } else if (event.target.value === "wrong") {
      alert("Opss, try again!");
    }
  }
  return (
    <div className="Questions">
      <div className="quest first">
        <h6>Who are the two best friends of Harry Potter?</h6>
        <select name="first" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Luna and Neville</option>
          <option value="correct">Ron and Hermione</option>
          <option value="wrong">Draco and Hermione</option>
          <option value="wrong">Ron and Neville</option>
          <option value="wrong">William and Kate</option>
        </select>
      </div>
      <div className="quest second">
        <h6>Which house is Cedric Diggory?</h6>
        <select name="second" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Slytherin</option>
          <option value="wrong">Gryffindor</option>
          <option value="wrong">Ravenclaw</option>
          <option value="wrong">Serpeverde</option>
          <option value="correct">Hufflepuff</option>
        </select>
      </div>
    </div>
  );
}
