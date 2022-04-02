import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log('people: ', person);
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])} className="btn">
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
