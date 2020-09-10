import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import Die from "./Die"

import { makeDie } from "../lib";

import '../RandomDice.css'

const RandomDice = (props) => {
  let [dice, setDice] = useState([]);
  let [sides, setSides] = useState(2);

  const addDieOnClickHandler = (event) => {
    event.preventDefault();

    let copyDice = [...dice];

    copyDice.push(makeDie(sides));

    setDice(copyDice);
  };

  const sidesOnChangeHandler = (event) => {
    event.preventDefault();
    setSides(event.target.value);
  };

  return (
    <div>
      <h1> Dice Roller </h1>
      <br></br>
      <h4>Add A New Die</h4>
      <InputGroup className='mb-3 make-die-field'>
        <FormControl
          placeholder="Sides"
          aria-label="Sides"
          aria-describedby="basic-addon2"
          onChange={sidesOnChangeHandler}
          value={sides}
        />
        <InputGroup.Append>
          <Button variant="warning"onClick={addDieOnClickHandler}>Submit Sides</Button>
          
        </InputGroup.Append>
      </InputGroup>
      <br></br>
      {
          dice.map((die, index) => {
              return (
                  <Die key={index} sides={die.sides}></Die>
              )
          })
      }

    </div>
  );
};

export default RandomDice;
