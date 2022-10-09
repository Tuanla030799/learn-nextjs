import Link from 'next/link';
import * as React from 'react';
import { ILayoutProps } from '../../models';
import Auth from '../common/Auth';

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: ILayoutProps) {
  return (
    <Auth>
      <h1>Admin Layout</h1>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
