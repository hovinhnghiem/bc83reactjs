import React from 'react'

export default function EventClick() {

const handleOnClick = () => {
    console.log(123);
}

const handleOnClickParam = (user, role) => {
    console.log(user, role);
};

  return (
    <div>
      <h1>Event Click</h1>
      <button onClick={handleOnClick}>On Click</button>
      <button onClick={() => handleOnClickParam("Nghiem", "Admin")}>On click param</button>
    </div>
  );
}
