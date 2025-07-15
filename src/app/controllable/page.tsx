'use client';
import {useState} from 'react';

import Calendar from './components/Calendar';

function Controllable() {
  const [value, setValue] = useState<Date | undefined>(new Date('2024-5-21'));
  return (
    <>
      <Calendar
        value={value}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
          setValue(date);
        }}
      />
      {/* <Calendar
        defaultValue={value}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
        }}
      /> */}
      <button
        onClick={() => {
          setValue(undefined);
          console.log(value?.toLocaleDateString());
        }}
      >
        清空
      </button>
      <button
        onClick={() => {
          setValue(new Date('2024-5-23'));
          console.log(value?.toLocaleDateString());
        }}
      >
        赋值
      </button>
    </>
  );
}

export default Controllable;
