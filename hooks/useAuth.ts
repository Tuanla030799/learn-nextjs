import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../api-client';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: task,
    error,
    mutate,
  } = useSWR('/tasks', {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
    ...options,
  });

  const firstIsLoading = task === undefined && error === undefined;

  async function login() {
    await authApi.login({
      email: 'tuanla221762@nuce.edu.vn',
      password: 'Aa@123456',
    });

    await mutate();
  }

  async function logout() {
    await authApi.logout();

    await mutate(null, false);
  }

  return {
    task,
    error,
    login,
    logout,
    firstIsLoading
  };
}
