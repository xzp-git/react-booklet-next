'use client';
import MiniCalendar from '@/components/mini-calendar';

const Calendar = () => {
  return (
    <>
      <MiniCalendar
        defaultValue={new Date('2023-3-1')}
        onChange={(date) => {
          alert(date.toLocaleDateString());
        }}
      ></MiniCalendar>
      <MiniCalendar defaultValue={new Date('2023-8-15')}></MiniCalendar>
    </>
  );
};

export default Calendar;
