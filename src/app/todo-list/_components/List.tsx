import {FC, Fragment} from 'react';
import classNames from 'classnames';

import {useTodoListStore} from '../store';

import Gap from './Gap';
import Item from './Item1';

interface ListProps {
  className?: string | string[];
}

export const List: FC<ListProps> = (props) => {
  const list = useTodoListStore((state) => state.list);
  const cs = classNames('h-full p-10', props.className);

  return (
    <div className={cs}>
      <Gap />
      {list.length
        ? list.map((item) => {
            return (
              <Fragment key={item.id}>
                <Gap />
                <Item data={item} />
              </Fragment>
            );
          })
        : '暂无待办事项'}
    </div>
  );
};
