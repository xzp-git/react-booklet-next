'use client';
import useControllableState from '@/hooks/useControllableState';

interface CalendarProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}
function Calendar(props: CalendarProps) {
  const {defaultValue = new Date(), onChange, value} = props;

  const [mergedValue, setValue] = useControllableState(new Date('2024-5-22'), {
    defaultValue,
    value,
    onChange
  });

  return (
    <div>
      {mergedValue?.toLocaleDateString('zh-CN')}
      <div
        onClick={() => {
          setValue(new Date('2024-5-1'));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          setValue(new Date('2024-5-2'));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          setValue(new Date('2024-5-3'));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

export default Calendar;
