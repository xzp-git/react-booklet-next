'use client';
import React, {FC} from 'react';

import GarbageBin from './_components/GarbageBin';
import {List} from './_components/List';
import NewItem from './_components/NewItem';
interface TodoListProps {
  className?: string;
}
const TodoList: FC<TodoListProps> = () => {
  return (
    <div className="w-full h-full flex justify-between items-start">
      <div
        className="flex-2 h-full p-12 border-2 border-blue-600 mr-10
          overflow-auto"
      >
        <List />
      </div>

      <div className="flex-1 h-full p-12 border-2 border-blue-600">
        <NewItem />
        <GarbageBin />
      </div>
    </div>
  );
};

export default TodoList;
