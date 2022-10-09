import * as React from 'react';
import { authApi } from '../../api-client';
import { useAuth } from '../../hooks/useAuth';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const { task, error, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const handleLogin = async () => {
    try {
      await login();
      console.log('redirect');
    } catch (error) {
      console.log('false to login', error);
    }
  };
  const handleGetTasks = async () => {
    try {
      await authApi.getTasks();
    } catch (error) {
      console.log('false to get tasks', error);
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
      console.log('redirect');
    } catch (error) {
      console.log('false to logout', error);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <p>Task: {JSON.stringify(task || {}, null, 4)}</p>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleGetTasks}>get tasks</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
