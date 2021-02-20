import React, { useState } from "react";

const AddGoals = (props) => {
  const [data, setData] = useState("");

  function newGoalHandler(event) {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: data,
      completed: false
    };

    setData("");

    props.newList(newGoal);
  }

  function dataHandler(e) {
    setData(e.target.value);
  }

  return (
    <div>
      <form onSubmit={newGoalHandler}>
        <input value={data} onChange={dataHandler} />
        <br />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default AddGoals;
