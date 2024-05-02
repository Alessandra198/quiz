import React, { useState } from "react";
import "./Questions.css";
import Results from "./Results";

export default function Questions() {
  let [bool, setBool] = useState(false);
  let [check, setCheck] = useState(null);
  function handleResponse(event) {
    event.preventDefault();
    if (bool) {
      setCheck(null);
      setBool(false);
    }
    if (event.target.value === "correct") {
      setCheck(check + 1);
    }
  }

  function handleResults() {
    setBool(true);
    console.log(check);
  }
  return (
    <div className="Questions">
      <div className="quest first">
        <h6>1. Who are the two best friends of Harry Potter?</h6>
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
        <h6>2. Which house is Cedric Diggory?</h6>
        <select name="second" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Slytherin</option>
          <option value="wrong">Gryffindor</option>
          <option value="wrong">Ravenclaw</option>
          <option value="wrong">Wampus</option>
          <option value="correct">Hufflepuff</option>
        </select>
      </div>
      <div className="quest third">
        <h6>
          3. What is the name of the centaur that rescues Harry in the Forbidden
          Forest?
        </h6>
        <select name="third" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Magorian</option>
          <option value="wrong">Ronan</option>
          <option value="correct">Firenze</option>
          <option value="wrong">Bane</option>
          <option value="wrong">Hagrid</option>
        </select>
      </div>
      <div className="quest fourth">
        <h6>4. Which of these is not an Horcrux of the Dark Lord?</h6>
        <select name="fourth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="correct">Scabbers</option>
          <option value="wrong">Slytherin's Locket</option>
          <option value="wrong">Harry Potter</option>
          <option value="wrong">Nagini</option>
          <option value="wrong">Ravenclaw's Diadem</option>
        </select>
      </div>
      <div className="quest fifth">
        <h6>5. What is the real name of Voldemort?</h6>
        <select name="fifth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Tom Richard Riddle</option>
          <option value="correct">Tom Marvolo Riddle</option>
          <option value="wrong">Tom Marvolo Voldemort</option>
          <option value="wrong">Richard Marvolo Riddle</option>
          <option value="wrong">Anakin Skywalker</option>
        </select>
      </div>
      <div className="quest sixth">
        <h6>6. Which one of these is an Unforgivable Curses?</h6>
        <select name="sixth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="correct">Cruciatus</option>
          <option value="wrong">Legilimens</option>
          <option value="wrong">Experliarmus</option>
          <option value="wrong">Aguamenti</option>
          <option value="wrong">Bidibi bodibi bu</option>
        </select>
      </div>
      <div className="quest seventh">
        <h6>7. Who guards the entrance to the Gryffindor common room?</h6>
        <select name="seventh" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Godric Gryffindor</option>
          <option value="wrong">Rowena Ravenclaw</option>
          <option value="wrong">Hagrid</option>
          <option value="wrong">Fluffy</option>
          <option value="correct">Fat Lady</option>
        </select>
      </div>
      <div className="quest eighth">
        <h6>8. How many Weasley siblings there are?</h6>
        <select name="eighth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">5</option>
          <option value="wrong">8</option>
          <option value="correct">7</option>
          <option value="wrong">4</option>
          <option value="wrong">12</option>
        </select>
      </div>
      <div className="quest ninth">
        <h6>9. Who gave Harry the Invisibility Cloak?</h6>
        <select name="ninth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Hedwig</option>
          <option value="correct">Silente</option>
          <option value="wrong">Sirius Black</option>
          <option value="wrong">Lord Voldemort</option>
          <option value="wrong">Remus Lupin</option>
        </select>
      </div>
      <div className="quest tenth">
        <h6>10. What is the name of Fred and George's shop?</h6>
        <select name="tenth" onChange={handleResponse}>
          <option value="">Choose one answer</option>
          <option value="wrong">Weasleys' Shop</option>
          <option value="correct">Weasleys' Wizard Wheezes</option>
          <option value="wrong">Wizard Wheezes</option>
          <option value="wrong">Weasleys brothers</option>
          <option value="wrong">Weasleys' brothers shop</option>
        </select>
      </div>
      <button onClick={handleResults}>Send</button>
      <Results check={check} bool={bool} />
    </div>
  );
}
