import {FC} from 'react';
import {useControllableValue} from 'ahooks';

import './index.css';

const monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月'
];
// const dayNames = [
//   '星期日',
//   '星期一',
//   '星期二',
//   '星期三',
//   '星期四',
//   '星期五',
//   '星期六'
// ]

const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

interface Props {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

const MiniCalendar: FC<Props> = (props) => {
  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date()
  });
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  const hanleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const renderDates = () => {
    const days = [];

    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(curDate);
      };
      days.push(
        <div
          key={i}
          className={`day ${date.getDate() === i ? 'selected' : ''}`}
          onClick={() => clickHandler()}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={hanleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};

export default MiniCalendar;
