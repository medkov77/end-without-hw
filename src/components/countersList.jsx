import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handle reset");
  };

  const handleIcrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value++;
        }
        return counter;
      })
    );
  };

  const handDeIcrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          if (counter.value > 0) {
            counter.value--;
          }
        }
        return counter;
      })
    );
  };

  return (
    <div className="container pt-5">
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIcrement}
          onDecrement={handDeIcrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm mt-2" onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};
export default CountersList;
