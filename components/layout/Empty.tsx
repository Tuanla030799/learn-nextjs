import Link from 'next/link';
import * as React from 'react';
import { ILayoutProps } from '../../models';

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: ILayoutProps) {
  return <div>{children}</div>;
}
