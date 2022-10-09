import React from 'react';
import { useAuth } from '../../hooks/useAuth';

type Props = {
  children: any;
};

const Auth = ({ children }: Props) => {
  const { task } = useAuth();
  return <div>{children}</div>;
};

export default Auth;
