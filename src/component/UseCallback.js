import React, { useState , useCallback } from "react";
import Button from "./Button";
import MessageView from "./MessageView";
import Title from "./Title";

function UseCallback() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);


  const newAge =useCallback(() => {
    setAge(age + 1);
  },[age]) 

  const newSalary = useCallback(() => {
    setSalary(salary + 1);
  },[salary])

  return (
    <div>
      <Title text={"Age and Salary"} />
      <Button handleClick={newAge}>Inc Age</Button>
      <MessageView text={"Age"} Count={age} />
      <Button handleClick={newSalary}>Inc Salary</Button>
      <MessageView text={"Salary"} Count={salary} />
    </div>
  );
}

export default UseCallback;
