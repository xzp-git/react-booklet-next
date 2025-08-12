import {FC, useEffect, useRef, useState} from 'react';
import {useDrag} from 'react-dnd';
import {Checkbox, Input} from 'antd';
import classNames from 'classnames';

import {ListItem} from '../store';
interface Props {
  data?: ListItem;
}
const Item: FC<Props> = (props) => {
  const {data} = props;
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [{dragging}, drag] = useDrag({
    type: 'LIST_ITEM',
    item: {},
    collect(monitor) {
      return {
        dragging: monitor.isDragging()
      };
    }
  });
  useEffect(() => {
    drag(ref);
  }, []);
  return (
    <div
      ref={ref}
      className={classNames(
        'cursor-move select-none w-full h-40 p-24 flex items-center bg-blue-400',
        dragging ? 'border-dashed bg-green-200' : ''
      )}
      onDoubleClick={() => setIsEdit(true)}
    >
      <Checkbox className="w-40 h-40 mr-10" />
      {isEdit ? (
        <Input onBlur={() => setIsEdit(false)} value={data?.content} />
      ) : (
        data?.content
      )}
    </div>
  );
};

export default Item;
