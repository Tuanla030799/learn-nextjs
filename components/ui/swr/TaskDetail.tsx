import * as React from 'react';
import useSWR from 'swr';

export interface ITaskDetailProps {
  taskId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export default function TaskDetail({ taskId }: ITaskDetailProps) {
  const { data, error, mutate } = useSWR(`/tasks/${taskId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  });

  const handleMutate = () => {
    mutate({ title: 'haha' }, true);
  };

  return (
    <div>
      Title: {data?.title || '--'}
      <button onClick={handleMutate}>mutate</button>
    </div>
  );
}
