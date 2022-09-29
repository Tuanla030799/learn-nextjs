import Link from 'next/link';
import * as React from 'react';
import { ILayoutProps } from '../../models';

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: ILayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
