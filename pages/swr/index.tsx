import * as React from 'react';
import { useState } from 'react';
import TaskDetail from '../../components/ui/swr/TaskDetail';

export interface ISwrPageProps {}

export default function SwrPage(props: ISwrPageProps) {
  const [taskDetails, setTaskDetails] = useState<number[]>([1, 1, 1]);

  const handleAddClick = () => {
    setTaskDetails((prev) => [...prev, 1]);
  };
  return (
    <div>
      <h1>swr</h1>
      <button onClick={handleAddClick}>add detail</button>
      <ul>
        {taskDetails.map((task, index) => {
          return (
            <li key={index}>
              <TaskDetail taskId="074ab7af-afbe-4cae-96e4-da441d40638f"></TaskDetail>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
